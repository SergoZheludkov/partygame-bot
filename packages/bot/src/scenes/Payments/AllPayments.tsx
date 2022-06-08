import React, { useState } from 'react';
import { useBotContext, ButtonGroup, Button, Text, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useAllPaymentQuery } from '@common_ubot/api-client';
import { format, parseISO } from 'date-fns';
import noop from 'lodash/noop';
import { getWallet } from '../../utilits';

interface AllPaymentsProps {
  onExit: () => void;
}

const paymentsPerPage = 5;

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'RUB':
      return '₽';
    case 'KZT':
      return '₸';
    default:
      return 'money';
  }
};

const AllPayments = ({ onExit }: AllPaymentsProps) => {
  const { t } = useTranslation(['payments', 'buttons']);
  const { chat } = useBotContext();
  const { data: allPaymentData, loading } = useAllPaymentQuery({ variables: { id: chat.id } });
  const [offset, setOffset] = useState(0);

  useText(onExit, t('buttons:back'));

  if (!loading && !allPaymentData) {
    return (
      <ButtonGroup isResizedKeyboard isReplyButtons isNewMessageEveryRender={false} title={t('error')}>
        <Button id="back" onClick={onExit}>
          {t('buttons:back')}
        </Button>
      </ButtonGroup>
    );
  }

  if (allPaymentData && !allPaymentData.getUserPayments.length) {
    return (
      <ButtonGroup isResizedKeyboard isReplyButtons isNewMessageEveryRender={false} title={t('empty')}>
        <Button id="back" onClick={onExit}>
          {t('buttons:back')}
        </Button>
      </ButtonGroup>
    );
  }

  if (allPaymentData && allPaymentData.getUserPayments.length) {
    const currentPage = offset + 1;
    const maxPage = Math.ceil(allPaymentData.getUserPayments.length / paymentsPerPage);
    const pagination = maxPage > 1;

    const thereIsPrev = currentPage > 1;
    const thereIsNext = currentPage < maxPage;
    const handlePrev = () => setOffset((prev) => prev - 1);
    const handleNext = () => setOffset((prev) => prev + 1);

    const start = offset * paymentsPerPage;
    const end = start + paymentsPerPage;

    const paymentList = allPaymentData.getUserPayments.slice(start, end).map((payment) => {
      const { wallet, amount, currency, updated, comment } = payment;
      const [date, time] = format(parseISO(updated), 'dd.LL.yyyy HH:mm').split(' ');
      return (
        <React.Fragment key={comment}>
          {getWallet(wallet.type)}
          &#32;-&#32;
          <b>{amount}</b>
          &#32;
          <b>{currency && getCurrencySymbol(currency)}</b>
          &#32;-&#32;
          {date}
          &#32;
          <i>{time}</i>
          <br />
          <br />
        </React.Fragment>
      );
    });

    const message = (
      <>
        {pagination && (
          <u>
            <b>
              {`${currentPage} ${t('from')} ${maxPage}`}
              <br />
              <br />
            </b>
          </u>
        )}
        {paymentList}
      </>
    );

    return (
      <>
        <Text isRemoveKeyboard isNewMessageEveryRender={false}>
          {t('title')}
        </Text>
        <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} maxColumns={2} title={message}>
          {pagination && (
            <Button id="prev" onClick={thereIsPrev ? handlePrev : noop}>
              {t('buttons:prev')}
            </Button>
          )}
          {pagination && (
            <Button id="next" onClick={thereIsNext ? handleNext : noop}>
              {t('buttons:next')}
            </Button>
          )}
          <Button id="back" onClick={onExit}>
            {t('buttons:back')}
          </Button>
        </ButtonGroup>
      </>
    );
  }

  return null;
};

export { AllPayments as Payments };
