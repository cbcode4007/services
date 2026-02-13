'use client';

import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DropdownLink() {
  const pathname = usePathname();

  const isServicesActive =
    pathname.startsWith('/support') ||
    pathname.startsWith('/solutions');

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={clsx(
          "group inline-flex w-full justify-start md:justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out",
          isServicesActive
            ? "bg-gray-700 text-white scale-105"
            : "text-gray-300 hover:bg-zinc-400 hover:text-white hover:scale-110"
        )}
      >
        Services
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={clsx(
            "-mr-1 size-5 transition-all duration-300 ease-out",
            isServicesActive
              ? "text-white"
              : "text-gray-400 group-hover:text-gray-200"
          )}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </Menu.Button>

      <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg outline-1 outline-white/10 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/support"
                className={clsx(
                  "block px-4 py-2 text-sm",
                  active ? "bg-gray-700 text-white" : "text-gray-300"
                )}
              >
                IT Support
              </Link>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                href="/solutions"
                className={clsx(
                  "block px-4 py-2 text-sm",
                  active ? "? bg-gray-700 text-white" : "text-gray-300"
                )}
              >
                IT Solutions
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
