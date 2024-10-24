import { CameraIcon, LightningBoltIcon, LockClosedIcon, MobileIcon, RocketIcon, UpdateIcon } from '@radix-ui/react-icons';

import { FeatureCard } from '../features/landing/FeatureCard';
import { Section } from '../features/landing/Section';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-sm transition-colors">
    {children}
  </div>
);

export const Features = () => {
  return (
    <div className="relative">
      <Section
        id="features"
        subtitle="Advanced Features"
        title="Everything you need to excel"
        description="Our platform combines cutting-edge AI technology with user-friendly features to enhance your learning experience."
        className="relative"
      >
        <div className="relative grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={(
              <FeatureIcon>
                <CameraIcon className="size-6 text-blue-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="AI Vision Technology"
          >
            Instantly capture and analyze your practice test questions with our advanced AI vision technology.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LightningBoltIcon className="size-6 text-purple-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="Instant Answers"
          >
            Get immediate answers and explanations delivered straight to your phone while you study.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <MobileIcon className="size-6 text-indigo-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="Cross-Device Integration"
          >
            Seamless integration between your computer and mobile device for efficient studying.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <RocketIcon className="size-6 text-blue-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="Adaptive Learning"
          >
            Smart AI that learns from your practice patterns to provide better explanations over time.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <LockClosedIcon className="size-6 text-purple-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="Secure Analysis"
          >
            Secure and private analysis of your practice tests with end-to-end encryption.
          </FeatureCard>

          <FeatureCard
            icon={(
              <FeatureIcon>
                <UpdateIcon className="size-6 text-indigo-400 transition-transform group-hover:scale-110" />
              </FeatureIcon>
            )}
            title="Real-time Sync"
          >
            Real-time synchronization between devices with our advanced webapp technology.
          </FeatureCard>
        </div>
      </Section>
    </div>
  );
};
