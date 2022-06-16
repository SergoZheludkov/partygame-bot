import { expressApp } from '../express-app';

import { NotificationData, NewReferralData, ReferralMoneyData, StatisticsTypes, PaymentStatistics } from './types';

export class MessageBroker {
  NOTIFICATION_BASE: string;

  NEW_REFERRAL: string;

  REFERRAL_MONEY: string;

  DAY_STATISTICS: string;

  MESSAGE: string;

  constructor() {
    this.NOTIFICATION_BASE = '/bot/notification';
    this.NEW_REFERRAL = `${this.NOTIFICATION_BASE}/new_referral`;
    this.REFERRAL_MONEY = `${this.NOTIFICATION_BASE}/referral_money`;
    this.DAY_STATISTICS = `${this.NOTIFICATION_BASE}/day_statistics`;
    this.MESSAGE = `${this.NOTIFICATION_BASE}/message`;
  }

  // notification(chatId: string, callback: () => void) {
  //   expressApp.get(`${this.NOTIFICATION_BASE}/${chatId}`, (req, res) => {
  //     callback();
  //     res.sendStatus(200);
  //   });
  // }

  notification(chatId: string, callback: (params: NotificationData) => void) {
    expressApp.post(`${this.MESSAGE}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const message = (data.message as string) || '';

      callback({ message });
      res.sendStatus(200);
    });
  }

  newReferral(chatId: string, callback: (params: NewReferralData) => void) {
    expressApp.post(`${this.NEW_REFERRAL}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const firstname = (data.firstname as string) || '';
      const lastname = (data.lastname as string) || '';

      callback({ firstname, lastname });
      res.sendStatus(200);
    });
  }

  referralMoney(chatId: string, callback: (params: ReferralMoneyData) => void) {
    expressApp.post(`${this.REFERRAL_MONEY}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const firstname = (data.firstname as string) || '';
      const lastname = (data.lastname as string) || '';
      const bonusMoney = (data.bonus_money as number) || 0;

      callback({ firstname, lastname, bonusMoney });
      res.sendStatus(200);
    });
  }

  dayStatistics(chatId: string, callback: (params: StatisticsTypes) => void) {
    expressApp.post(`${this.DAY_STATISTICS}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const users = (data.users as number) || 0;
      const payments = (data.payments as PaymentStatistics) || {};

      callback({ users, payments });
      res.sendStatus(200);
    });
  }
}

export const messageBroker = new MessageBroker();
