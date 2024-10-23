import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { DashboardSection } from '@/features/dashboard/DashboardSection';
import { TitleBar } from '@/features/dashboard/TitleBar';
import { PricingCard } from '@/features/billing/PricingCard';

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
          name="Basic Plan"
          price={100}
          description="Essential scanning features"
          features={[
            'Basic Hardware Scanning',
            'Basic Software Scanning',
            'Email Support',
            'Weekly Reports'
          ]}
        />
        <PricingCard
          name="Premium Plan"
          price={400}
          description="Advanced scanning features"
          features={[
            'Advanced Hardware Scanning',
            'Advanced Software Scanning',
            'Priority Support',
            'Real-time Monitoring',
            'Custom Reports',
            'API Access'
          ]}
        />
      </div>
    </>
  );
}
