'use client';

import { Menu } from '@headlessui/react';
import Link from 'next/link';

export default function DropdownLink() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 ease-out">
        Services
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="-mr-1 size-5 text-gray-400"
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
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-white/5 text-white' : 'text-gray-300'
                }`}
              >
                IT Support
              </Link>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                href="/solutions"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-white/5 text-white' : 'text-gray-300'
                }`}
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
