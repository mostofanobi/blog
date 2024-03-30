'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import Breadcrumb from '../breadcrumb/breadcrumb.comp';

const Header = () => {
  const p = usePathname();
  console.log(p);
  return (
    <header className='sticky top-0 z-[999] border-b'>
      <div className='max-w-screen-2xl mx-auto p-6'>
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header;
