import Link from 'next/link';

import { StickyBanner } from '../features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Transform your study sessions with AI-powered assistance -
    {' '}
    <Link href="/sign-up" className="font-semibold text-blue-600 hover:text-blue-700">
      Try IntiTutor Today
    </Link>
  </StickyBanner>
);
