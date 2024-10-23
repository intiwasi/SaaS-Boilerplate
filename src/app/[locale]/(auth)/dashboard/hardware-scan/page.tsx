'use client';

import { useTranslations } from 'next-intl';

import { PayPalButton } from '@/components/PayPalButton';
import { DashboardSection } from '@/features/dashboard/DashboardSection';
import { TitleBar } from '@/features/dashboard/TitleBar';

export default function HardwareScanPage() {
  const t = useTranslations('HardwareScan');

  return (
    <>
      <TitleBar title={t('title_bar')} description={t('title_bar_description')} />

      <DashboardSection
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <div className="mb-6 text-xl font-bold text-primary">
              $100
              {' '}
              <span className="text-sm text-gray-600">/month</span>
            </div>
          </div>

          <div className="mb-8">
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Hardware Performance Analysis
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                System Compatibility Check
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Hardware Optimization Reports
              </li>
            </ul>
          </div>

          <PayPalButton amount="100.00" description="Hardware Scan Service" />
        </div>
      </DashboardSection>
    </>
  );
}
