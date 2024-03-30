'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div class='flex w-72 flex-col h-[calc(100vh-64px)] overflow-y-auto py-6 border-r sticky top-16'>
      <nav class='flex flex-1 flex-col'>
        <ul role='list' class='flex flex-1 flex-col gap-y-7'>
          <li>
            <h2 className='text-xl'>Getting Started</h2>
            <div className='relative mt-3 pl-2'>
              <div class='absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5'></div>
              <ul role='list' class='border-l border-transparent'>
                <li className='relative'>
                  {pathname === '/' ? <div className='absolute h-full w-px bg-blue-600 -left-px top-0'></div> : null}
                  <Link
                    href='/'
                    class='flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900'
                  >
                    Introduction
                  </Link>
                </li>
                <li className='relative'>
                  <Link
                    href='/collections'
                    class='flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900'
                  >
                    Colections
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
