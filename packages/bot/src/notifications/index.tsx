import React from 'react';
import { Notification } from './Notification';
import { ReferralMoney } from './ReferralMoney';
import { NewReferral } from './NewReferral';
import { DailyStatistics } from './DailyStatistics';

export const Notifications = () => (
  <>
    <Notification />
    <NewReferral />
    <ReferralMoney />
    <DailyStatistics />
  </>
);
