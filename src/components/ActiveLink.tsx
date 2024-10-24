'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '../utils/Helpers';

export const ActiveLink = (props: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      className={cn(
        'px-3 py-2 transition-colors duration-200',
        pathname.endsWith(props.href)
          ? 'rounded-md bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 text-white'
          : 'text-gray-400 hover:text-gray-200',
      )}
    >
      {props.children}
    </Link>
  );
};
