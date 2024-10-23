import { RocketIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '../components/ui/buttonVariants';
import { CTABanner } from '../features/landing/CTABanner';
import { Section } from '../features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <a
            className={buttonVariants({
              size: 'lg',
              className: 'bg-blue-600 hover:bg-blue-700 text-white',
            })}
            href="/sign-up"
          >
            <RocketIcon className="mr-2 size-5" />
            {t('button_text')}
          </a>
        )}
      />
    </Section>
  );
};
