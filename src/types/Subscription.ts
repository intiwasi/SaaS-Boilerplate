export const BILLING_INTERVAL = {
  MONTH: 'month',
  YEAR: 'year',
} as const;

export type BillingInterval = typeof BILLING_INTERVAL[keyof typeof BILLING_INTERVAL];

export interface PricingPlan {
  id: string;
  price: number;
  interval: BillingInterval;
  testPriceId: string;
  devPriceId: string;
  prodPriceId: string;
  features: {
    teamMember: number;
    website: number;
    storage: number;
    transfer: number;
  };
}
