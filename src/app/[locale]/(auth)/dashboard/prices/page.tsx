'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PayPalButton } from '@/components/PayPalButton';
import { Button } from '@/components/ui/button';
import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { BILLING_INTERVAL } from '@/types/Subscription';

export default function PricesPage() {
  const t = useTranslations('Prices');

  return (
    <>
      <TitleBar title={t('title_bar')} description={t('title_bar_description')} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <PricingCard
          planId="basic"
          price={100}
          interval={BILLING_INTERVAL.MONTH}
          button={(
            <div className="space-y-4">
              <Link href="/dashboard/prices/free" className="w-full">
                <Button className="mt-6 w-full">Select Basic Plan</Button>
              </Link>
              <div className="mt-4">
                <PayPalButton amount="100.00" description="Basic Plan Subscription" />
              </div>
            </div>
          )}
        >
          <PricingFeature>Basic Hardware Scanning</PricingFeature>
          <PricingFeature>Basic Software Scanning</PricingFeature>
          <PricingFeature>Email Support</PricingFeature>
          <PricingFeature>Weekly Reports</PricingFeature>
        </PricingCard>

        <PricingCard
          planId="premium"
          price={400}
          interval={BILLING_INTERVAL.MONTH}
          button={(
            <div className="space-y-4">
              <Link href="/dashboard/prices/premium" className="w-full">
                <Button className="mt-6 w-full">Select Premium Plan</Button>
              </Link>
              <div className="mt-4">
                <PayPalButton amount="400.00" description="Premium Plan Subscription" />
              </div>
            </div>
          )}
        >
          <PricingFeature>Advanced Hardware Scanning</PricingFeature>
          <PricingFeature>Advanced Software Scanning</PricingFeature>
          <PricingFeature>Priority Support</PricingFeature>
          <PricingFeature>Real-time Monitoring</PricingFeature>
          <PricingFeature>Custom Reports</PricingFeature>
          <PricingFeature>API Access</PricingFeature>
        </PricingCard>
      </div>
    </>
  );
}
