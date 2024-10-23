import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { DashboardSection } from '@/features/dashboard/DashboardSection';
import { TitleBar } from '@/features/dashboard/TitleBar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'HardwareScan',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function HardwareScanPage() {
  const t = useTranslations('HardwareScan');

  return (
    <>
      <TitleBar title={t('title_bar')} description={t('title_bar_description')} />

      <DashboardSection
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="text-center">
          <p className="mt-4">Hardware scanning functionality will be implemented here.</p>
        </div>
      </DashboardSection>
    </>
  );
}
