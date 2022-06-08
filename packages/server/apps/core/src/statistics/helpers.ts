import { Payment } from '../payment/payment.model';

export interface PaymentStatistics {
  [key: string]: {
    total: number;
    amount: number;
  };
}

const getPaymentStatistic = (
  statistics: PaymentStatistics,
  { wallet: { type: wallet }, expected_amount }: Payment,
): PaymentStatistics => {
  const [USD] = expected_amount.split('/');
  const amount = Number(USD);
  return statistics[wallet]
    ? {
        ...statistics,
        [wallet]: {
          amount: statistics[wallet].amount + amount,
          total: statistics[wallet].total + 1,
        },
      }
    : {
        ...statistics,
        [wallet]: {
          total: 1,
          amount,
        },
      };
};

const getPaymentStatisticSum = (statistics: PaymentStatistics, paymentMeta: string): PaymentStatistics => {
  const paymentStatistics = JSON.parse(paymentMeta) as PaymentStatistics;
  return Object.entries(paymentStatistics).reduce((acc, [wallet, { amount, total }]) => {
    return acc[wallet]
      ? {
          ...acc,
          [wallet]: {
            amount: acc[wallet].amount + amount,
            total: acc[wallet].total + total,
          },
        }
      : {
          ...acc,
          [wallet]: { total, amount },
        };
  }, statistics);
};

export { getPaymentStatistic, getPaymentStatisticSum };
