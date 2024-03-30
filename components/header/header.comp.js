'use client';

import React, { useState } from 'react';
import { BsMoonStars } from 'react-icons/bs';
import { PiHamburger, PiMoonStars } from 'react-icons/pi';

import { usePathname } from 'next/navigation';

import SidebarOffcanvas from '../sidebar/sidebar-offcanvas.comp';
import Breadcrumb from './breadcrumb.comp';
import Logo from './logo.comp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <header className='sticky top-0 z-[999] bg-gray-100'>
      <div className='border-b'>
        <div className='max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <button
              onClick={toggleMenu}
              type='button'
              className='md:hidden rounded-lg border p-1.5 bg-gray-100 hover:bg-gray-200'
            >
              <PiHamburger className='text-2xl' />
            </button>
            <SidebarOffcanvas isOpen={isMenuOpen} toggle={toggleMenu} />

            <div className='md:flex md:gap-2 hidden'>
              <Logo />
              <Breadcrumb paths={paths} />
            </div>
          </div>
          <div className='md:hidden'>
            <Logo />
          </div>
          <div>
            <button type='button' className='rounded-lg border p-1.5 bg-gray-100 hover:bg-gray-200'>
              <PiMoonStars className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
      {paths.length ? (
        <div className='border-b md:hidden'>
          <div className='max-w-screen-2xl mx-auto px-6 py-2'>
            <Breadcrumb paths={paths} />
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
