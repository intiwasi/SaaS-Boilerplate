use client;

import { useTranslations } from 'next-intl';

import { DashboardSection } from '@/features/dashboard/DashboardSection';
import { TitleBar } from '@/features/dashboard/TitleBar';
import Link from 'next/link';
import { use } from 'chai';

export default function SoftwareScanPage() {
  const t = useTranslations('SoftwareScan');

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
              {/*$400
              {' '}
              <span className="text-sm text-gray-600">/month</span>*/}
            </div>
          </div>

          <div className="mb-8">
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Deep Code Analysis
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Security Vulnerability Detection
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Performance Optimization Reports
              </li>
            </ul>
          </div>

          <Link href="/dashboard/hardware-ai">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Hardware AI
            </a>
          </Link>
        </div>
      </DashboardSection>
    </>
  );
}
