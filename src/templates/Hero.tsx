import { RocketIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '../components/ui/badgeVariants';
import { buttonVariants } from '../components/ui/buttonVariants';
import { CenteredHero } from '../features/landing/CenteredHero';
import { Section } from '../features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <div
            className={badgeVariants()}
          >
            <RocketIcon className="mr-1 size-5" />
            {t('follow_twitter')}
          </div>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
                className: 'bg-blue-600 hover:bg-blue-700 text-white',
              })}
              href="/sign-up"
            >
              {t('primary_button')}
            </a>

            <a
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className: 'border-blue-600 text-blue-600 hover:bg-blue-50',
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
