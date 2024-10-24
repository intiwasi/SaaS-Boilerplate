import { useTranslations } from 'next-intl';
import React from 'react';

import type { BillingInterval } from '../../types/Subscription';

export const PricingCard = (props: {
  planId: string;
  price: number;
  interval: BillingInterval;
  button: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-8 text-center backdrop-blur-lg">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-indigo-500/5" />

      {/* Content */}
      <div className="relative">
        <div className="text-lg font-semibold text-gray-100">
          {t(`${props.planId}_plan_name`)}
        </div>

        <div className="mt-3 flex items-center justify-center">
          <div className="ai-gradient-text text-5xl font-bold">
            {`$${props.price}`}
          </div>

          <div className="ml-1 text-gray-400">
            {`/ ${t(`plan_interval_${props.interval}`)}`}
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-400">
          {t(`${props.planId}_plan_description`)}
        </div>

        <div className="relative">
          {props.button}
        </div>

        <ul className="mt-8 space-y-3 text-gray-300">{props.children}</ul>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 hover:opacity-10" />
    </div>
  );
};
