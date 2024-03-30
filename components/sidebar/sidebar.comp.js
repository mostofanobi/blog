'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sitemap = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Introduction',
        href: '/'
      },
      {
        title: 'Collections',
        href: '/collections'
      }
    ]
  }
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
        {sitemap.map((item) => {
          return (
            <li key={item.title}>
              <h2 className='text-xl'>{item.title}</h2>
              {item.children ? (
                <div className='relative mt-3 pl-2'>
                  <div className='absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5'></div>
                  <ul role='list' className='border-l border-transparent'>
                    {item.children.map((child) => {
                      return (
                        <li key={child.title} className='relative'>
                          {pathname === child.href ? (
                            <div className='absolute h-full w-px bg-blue-600 -left-px top-0'></div>
                          ) : null}
                          <Link
                            href={child.href}
                            className='flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900'
                          >
                            {child.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
