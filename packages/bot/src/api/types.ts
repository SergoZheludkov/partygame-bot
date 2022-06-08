export interface NotificationData {
  message: string;
}

export interface NewReferralData {
  firstname: string;
  lastname: string;
}

export interface ReferralMoneyData extends NewReferralData {
  bonusMoney: number;
}

export interface PaymentStatistics {
  [key: string]: {
    total: number;
    amount: number;
  };
}

export interface StatisticsTypes {
  users: number;
  payments: PaymentStatistics;
}
