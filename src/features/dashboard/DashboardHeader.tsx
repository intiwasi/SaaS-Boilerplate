'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

import { ActiveLink } from '../../components/ActiveLink';
import { LocaleSwitcher } from '../../components/LocaleSwitcher';
import { ToggleMenuButton } from '../../components/ToggleMenuButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Logo } from '../../templates/Logo';

export const DashboardHeader = (props: {
  menu: {
    href: string;
    label: string;
  }[];
}) => {
  return (
    <>
      <div className="flex items-center">
        <Link href="/dashboard" className="max-sm:hidden">
          <Logo />
        </Link>

        <nav className="ml-3 max-lg:hidden">
          <ul className="flex flex-row items-center gap-x-3 text-lg font-medium text-gray-300">
            {props.menu.map(item => (
              <li key={item.href}>
                <ActiveLink href={item.href}>{item.label}</ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex items-center gap-x-1.5">
          <li>
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ToggleMenuButton />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-gray-800 bg-gray-900 text-gray-300">
                  {props.menu.map(item => (
                    <DropdownMenuItem key={item.href} className="hover:bg-gray-800">
                      <Link href={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>

          <li>
            <LocaleSwitcher />
          </li>

          <li>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/dashboard/user-profile"
              appearance={{
                elements: {
                  rootBox: 'px-2 py-1.5',
                  userButtonPopoverCard: 'bg-gray-900 border-gray-800',
                  userButtonPopoverText: 'text-gray-300',
                  userButtonPopoverActionButtonText: 'text-gray-300',
                  userButtonPopoverActionButtonIcon: 'text-gray-300',
                  userButtonPopoverFooter: 'border-gray-800',
                },
              }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
