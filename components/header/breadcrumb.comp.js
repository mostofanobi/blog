'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol role='list' className='flex items-center space-x-2'>
        <li>
          <div>
            <Link href='/'>
              <img
                src='https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Fimages%2Fmesh_dojo_gradient.png&w=1920&q=75'
                alt='logo'
                className='w-7 h-7'
              />
            </Link>
          </div>
        </li>
        {paths.map((path) => {
          return (
            <li key={path}>
              <div className='flex items-center'>
                <svg
                  className='h-5 w-5 flex-shrink-0 text-gray-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-`.448z' />
                </svg>
                <Link href={`/${path}`} className='ml-2 text-sm font-medium text-gray-500 hover:text-gray-700'>
                  {path}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
