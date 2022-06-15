import React from 'react';
import { Notification } from './notification';
import { ReferralMoney } from './referral-money';
import { NewReferral } from './new-referral';
import { DailyStatistics } from './daily-statistics';

export const Notifications = () => (
  <>
    <Notification />
    <NewReferral />
    <ReferralMoney />
    <DailyStatistics />
  </>
);
