import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      id="pricing"
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-600/5 via-blue-600/5 to-transparent" />
      <div className="absolute -left-64 top-0 size-[700px] animate-pulse rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -right-64 bottom-0 size-[700px] animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-700" />

      <div className="relative">
        <PricingInformation
          buttonList={{
            [PLAN_ID.FREE]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-opacity',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.PREMIUM]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.ENTERPRISE]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
          }}
        />
      </div>
    </Section>
  );
};
