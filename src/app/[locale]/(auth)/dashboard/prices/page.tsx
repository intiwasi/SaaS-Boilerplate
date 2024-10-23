import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { BILLING_INTERVAL } from '@/types/Subscription';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Prices',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

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
            <Link href="/dashboard/prices/free" className="w-full">
              <Button className="mt-6 w-full">Select Basic Plan</Button>
            </Link>
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
            <Link href="/dashboard/prices/premium" className="w-full">
              <Button className="mt-6 w-full">Select Premium Plan</Button>
            </Link>
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
