import { CameraIcon, LightningBoltIcon, LockClosedIcon, MobileIcon, RocketIcon, UpdateIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { Background } from '../components/Background';
import { FeatureCard } from '../features/landing/FeatureCard';
import { Section } from '../features/landing/Section';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100">
    {children}
  </div>
);

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={(
              <FeatureIcon>
                <CameraIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature1_title')}
          >
            Instantly capture and analyze your practice test questions with our advanced AI vision technology.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LightningBoltIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature2_title')}
          >
            Get immediate answers and explanations delivered straight to your phone while you study.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <MobileIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature3_title')}
          >
            Seamless integration between your computer and mobile device for efficient studying.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <RocketIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature4_title')}
          >
            Smart AI that learns from your practice patterns to provide better explanations over time.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LockClosedIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature5_title')}
          >
            Secure and private analysis of your practice tests with end-to-end encryption.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <UpdateIcon className="size-6 text-blue-600" />
              </FeatureIcon>
            )}
            title={t('feature6_title')}
          >
            Real-time synchronization between devices with our advanced webapp technology.
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};
