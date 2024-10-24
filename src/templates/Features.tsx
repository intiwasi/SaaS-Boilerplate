import { CameraIcon, LightningBoltIcon, LockClosedIcon, MobileIcon, RocketIcon, UpdateIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { FeatureCard } from '../features/landing/FeatureCard';
import { Section } from '../features/landing/Section';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-sm transition-colors">
    {children}
  </div>
);

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <div className="relative">
      <Section
        id="features"
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
        className="relative"
      >
        <div className="relative grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={(
              <FeatureIcon>
                <CameraIcon className="size-6 text-blue-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature1_title')}
          >
            {t('feature1_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LightningBoltIcon className="size-6 text-purple-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature2_title')}
          >
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <MobileIcon className="size-6 text-indigo-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature3_title')}
          >
            {t('feature3_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <RocketIcon className="size-6 text-blue-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature4_title')}
          >
            {t('feature4_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LockClosedIcon className="size-6 text-purple-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature5_title')}
          >
            {t('feature5_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <UpdateIcon className="size-6 text-indigo-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title={t('feature6_title')}
          >
            {t('feature6_description')}
          </FeatureCard>
        </div>
      </Section>
    </div>
  );
};
