import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '../components/LocaleSwitcher';
import { buttonVariants } from '../components/ui/buttonVariants';
import { CenteredMenu } from '../features/landing/CenteredMenu';
import { Section } from '../features/landing/Section';
import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5">
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link
                className={buttonVariants({
                  className: 'bg-blue-600 hover:bg-blue-700 text-white',
                })}
                href="/sign-up"
              >
                {t('sign_up')}
              </Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="#features">Features</Link>
        </li>

        <li>
          <Link href="#pricing">Pricing</Link>
        </li>

        <li>
          <Link href="#demo">Demo</Link>
        </li>

        <li>
          <Link href="#faq">FAQ</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
