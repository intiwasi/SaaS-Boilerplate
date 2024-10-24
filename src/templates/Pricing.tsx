import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '../components/ui/buttonVariants';
import { Section } from '../features/landing/Section';

export const Pricing = () => {
  const t = useTranslations('PricingPlan');

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

      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <h3 className="ai-gradient-text mb-4 text-xl font-semibold">{t('screenshot_plan_name')}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-100">$100</span>
              <span className="text-gray-400">{t('price_per_month')}</span>
            </div>
            <p className="mb-6 text-gray-300">{t('screenshot_plan_description')}</p>
            <ul className="mb-8 space-y-4">
              {t('screenshot_features').map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="mr-3 size-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className={buttonVariants({
                className: 'w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-opacity',
              })}
            >
              {t('start_button')}
            </Link>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
          <div className="absolute -right-4 -top-4 z-10 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            Most Popular
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <h3 className="ai-gradient-text mb-4 text-xl font-semibold">{t('pro_plan_name')}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-100">$400</span>
              <span className="text-gray-400">{t('price_per_month')}</span>
            </div>
            <p className="mb-6 text-gray-300">{t('pro_plan_description')}</p>
            <ul className="mb-8 space-y-4">
              {t('pro_features').map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="mr-3 size-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className={buttonVariants({
                className: 'w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity',
              })}
            >
              {t('start_button')}
            </Link>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <h3 className="ai-gradient-text mb-4 text-xl font-semibold">{t('enterprise_plan_name')}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-100">$999</span>
              <span className="text-gray-400">{t('price_per_month')}</span>
            </div>
            <p className="mb-6 text-gray-300">{t('enterprise_plan_description')}</p>
            <ul className="mb-8 space-y-4">
              {t('enterprise_features').map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="mr-3 size-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className={buttonVariants({
                className: 'w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity',
              })}
            >
              {t('start_button')}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
