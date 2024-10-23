import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

import { BILLING_INTERVAL, type PricingPlan } from '../types/Subscription';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'IntiTutor',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  FREE: 'screenshot',
  PREMIUM: 'pro',
  ENTERPRISE: 'enterprise',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.FREE]: {
    id: PLAN_ID.FREE,
    price: 100,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: '',
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 1,
      website: 1,
      storage: 1,
      transfer: 1,
    },
  },
  [PLAN_ID.PREMIUM]: {
    id: PLAN_ID.PREMIUM,
    price: 400,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_premium_test',
    devPriceId: 'price_1PNksvKOp3DEwzQlGOXO7YBK',
    prodPriceId: '',
    features: {
      teamMember: 1,
      website: 1,
      storage: 1,
      transfer: 1,
    },
  },
  [PLAN_ID.ENTERPRISE]: {
    id: PLAN_ID.ENTERPRISE,
    price: 999,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_enterprise_test',
    devPriceId: 'price_1PNksvKOp3DEwzQli9IvXzgb',
    prodPriceId: 'price_123',
    features: {
      teamMember: 100,
      website: 100,
      storage: 100,
      transfer: 100,
    },
  },
};
