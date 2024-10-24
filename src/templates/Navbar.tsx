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
              <Link href="/sign-in" className="text-gray-300 transition-colors hover:text-white">{t('sign_in')}</Link>
            </li>
            <li>
              <Link
                className={buttonVariants({
                  className: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity',
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
          <Link href="#features" className="text-gray-300 transition-colors hover:text-white">Features</Link>
        </li>

        <li>
          <Link href="#pricing" className="text-gray-300 transition-colors hover:text-white">Pricing</Link>
        </li>

        <li>
          <Link href="#demo" className="text-gray-300 transition-colors hover:text-white">Demo</Link>
        </li>

        <li>
          <Link href="#faq" className="text-gray-300 transition-colors hover:text-white">FAQ</Link>
        </li>

        <li>
          <Link href="/contact" className="text-gray-300 transition-colors hover:text-white">Contact</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
