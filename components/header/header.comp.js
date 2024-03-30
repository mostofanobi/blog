'use client';

import React, { useState } from 'react';
import { PiHamburgerDuotone } from 'react-icons/pi';

import SidebarOffcanvas from '../sidebar/sidebar-offcanvas.comp';
import Breadcrumb from './breadcrumb.comp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className='sticky top-0 z-[999] border-b bg-gray-100'>
      <div className='max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <button
            onClick={toggleMenu}
            type='button'
            className='lg:hidden rounded-lg border p-1.5 bg-gray-50 hover:bg-gray-200'
          >
            <PiHamburgerDuotone className='text-2xl' />
          </button>
          <SidebarOffcanvas isOpen={isMenuOpen} toggle={toggleMenu} />
          <Breadcrumb />
        </div>
        <h1>Hello</h1>
      </div>
    </header>
  );
};

export default Header;
