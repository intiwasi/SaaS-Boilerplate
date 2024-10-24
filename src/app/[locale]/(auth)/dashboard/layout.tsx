import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { DashboardHeader } from '../../../../features/dashboard/DashboardHeader';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="relative">
        {/* Ambient light effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl" />

        {/* Header */}
        <div className="relative border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-screen-xl items-center justify-between px-3 py-4">
            <DashboardHeader
              menu={[
                {
                  href: '/dashboard',
                  label: t('home'),
                },
                {
                  href: '/dashboard/prices',
                  label: t('prices'),
                },
                {
                  href: '/dashboard/hardware-scan',
                  label: t('hardware_scan'),
                },
                {
                  href: '/dashboard/software-scan',
                  label: t('software_scan'),
                },
                {
                  href: '/dashboard/hardware-ai',
                  label: t('hardware_ai'),
                },
                {
                  href: '/dashboard/software-ai',
                  label: t('software_ai'),
                },
              ]}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="relative min-h-[calc(100vh-72px)]">
          <div className="mx-auto max-w-screen-xl px-3 pb-16 pt-6">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';
