export interface PaymentStatistics {
  [key: string]: {
    total: number;
    amount: number;
  };
}
