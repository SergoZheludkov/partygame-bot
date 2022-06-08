/* eslint-disable camelcase */
import { getRandomHash } from '@common_ubot/utilits';
import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Query, Mutation, InputType, Field } from '@nestjs/graphql';
import { IsDefined } from 'class-validator';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, OrderItem } from 'sequelize';
import { PaymentDto, PaymentCreateDto } from '../dto';
import { Payment } from '../payment.model';
import { User } from '../../user/user.model';
import { Wallet } from '../../wallet/wallet.model';
import { QiwiService, QiwiOperations } from '../wallets/qiwi.service';

interface QiwiOperation {
  date: string; // "2021-06-17T13:29:14+03:00"
  error: string | null;
  status: string;
  sum: {
    amount: number;
    currency: number;
  };
  commission: {
    amount: number;
    currency: number;
  };
  total: {
    amount: number;
    currency: number;
  };
  source: {
    id: number;
  };
  comment: string;
  view: {
    title: string;
    account: string;
  };
}

@InputType('CheckPaymentInput')
export class CheckPaymentInput {
  @Field()
  @IsDefined()
  comment: string;
}

@Resolver()
export class PaymentResolver extends NoOpQueryService<Payment> {
  constructor(
    @InjectModel(Payment) readonly payments: typeof Payment,
    @InjectModel(User) readonly user: typeof User,
    @InjectModel(Wallet) readonly wallet: typeof Wallet,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private sequelize: Sequelize,
    private qiwi: QiwiService,
  ) {
    super();
  }

  getURLtoReferralMoneyNotification(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/referral_money/${userid}`;
  }

  @Query(() => [PaymentDto])
  async getUserPayments(@Args('id') user_id: string) {
    const where = { user_id, is_paid: true };
    const order: OrderItem[] = [['updated', 'DESC']];
    try {
      const payments = await this.payments.findAll({ where, order });
      return payments;
    } catch (e) {
      console.error(e);
      throw new Error('Error with query Payment');
    }
  }

  @Mutation(() => PaymentDto)
  async createPayment(@Args('input') input: PaymentCreateDto) {
    const { user_id, wallet_id, amount } = input;
    const comment = `${user_id}-${getRandomHash(10)}`;
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const wallet = await this.wallet.findByPk(wallet_id, { transaction });
        if (!wallet) return null;

        const expected_amount = await this.qiwi.getExpectedAmount(amount, wallet.token);
        const paymentValues = {
          user_id,
          wallet_id,
          comment,
          expected_amount,
        };

        const payment = await this.payments.create(paymentValues, { transaction });
        return payment;
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with create Payment');
    }
  }

  @Mutation(() => PaymentDto)
  async checkPayment(@Args('input') { comment }: CheckPaymentInput) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const payment = await this.payments.findOne({ where: { comment }, transaction });
        const user = await this.user.findByPk(payment?.user_id, { transaction });
        const wallet = await this.wallet.findByPk(payment?.wallet_id, { transaction });

        if (payment && user && wallet) {
          const lastDayOperations: QiwiOperation[] = await this.qiwi.getOperationHistory(wallet, {
            operation: QiwiOperations.IN,
          });

          const operation = lastDayOperations.find(({ comment: paymentComment }) => paymentComment === comment);

          if (!operation || operation.status !== 'SUCCESS') return null;

          const [USD, EUR, RUB, KZT] = payment.expected_amount.split('/').map(Number);
          const currency = this.qiwi.getCodeToCurrency(operation.sum.currency);
          const { amount } = operation.sum;

          let is_paid;
          switch (currency) {
            case 'USD':
              if (amount === USD) is_paid = true;
              break;

            case 'EUR':
              if (amount === EUR) is_paid = true;
              break;

            case 'RUB':
              if (amount === RUB) is_paid = true;
              break;

            case 'KZT':
              if (amount === KZT) is_paid = true;
              break;

            default:
              is_paid = false;
          }

          if (!is_paid) return payment;

          const { account } = operation.view;
          const user_wallet_number = account.replace('+', '');

          // запись оплаты и начисление денег
          const updatedData = { currency, amount, is_paid, user_wallet_number };
          await payment.update(updatedData, { transaction });
          await user.increment({ balance: USD }, { transaction });
          await wallet.increment({ input_money: USD }, { transaction });

          // проверка и обработка реферрала
          const referral = await this.user.findByPk(user.who_invite);
          if (referral) {
            const referral_money = USD / 10;

            await referral.increment({ referral_money }, { transaction });
            await payment.update({ referral_id: referral.id, referral_money }, { transaction });

            const data = {
              firstname: user.firstname,
              lastname: user.lastname,
              bonus_money: referral_money,
            };

            const url = this.getURLtoReferralMoneyNotification(referral.id);
            await this.httpService.post(url, { data }).toPromise();
          }
        }

        return payment;
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with check Payment');
    }
  }
}
