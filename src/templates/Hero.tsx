import { RocketIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '../components/ui/badgeVariants';
import { buttonVariants } from '../components/ui/buttonVariants';
import { CenteredHero } from '../features/landing/CenteredHero';
import { Section } from '../features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section id="hero" className="relative overflow-hidden py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />

      <div className="absolute -left-40 -top-32 size-[500px] animate-pulse rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-40 size-[500px] animate-pulse rounded-full bg-blue-500/30 blur-3xl delay-1000" />

      <CenteredHero
        banner={(
          <div
            className={badgeVariants({
              className: 'backdrop-blur-sm border border-gray-800/50 bg-gray-900/50',
            })}
          >
            <RocketIcon className="mr-1 size-5 animate-bounce" />
            {t('follow_twitter')}
          </div>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="ai-gradient-text font-bold">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({
                size: 'lg',
                className: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity',
              })}
              href="/sign-up"
            >
              {t('primary_button')}
            </a>

            <a
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className: 'border-gray-800 bg-gray-900/50 text-gray-100 backdrop-blur-sm hover:bg-gray-800',
              })}
              href="#demo"
            >
              {t('secondary_button')}
            </a>
          </>
        )}
      />
    </Section>
  );
};
