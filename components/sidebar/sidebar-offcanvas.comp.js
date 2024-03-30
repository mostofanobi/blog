import React from 'react';
import { BsXLg } from 'react-icons/bs';

import Link from 'next/link';

import classNames from 'classnames';

import Sidebar from './sidebar.comp';

const SidebarOffcanvas = ({ isOpen, toggle }) => {
  return (
    <div
      className={classNames({
        'pointer-events-none': !isOpen,
        'fixed inset-0 z-[9999] lg:hidden': true
      })}
      role='dialog'
      aria-modal='true'
    >
      <div
        onClick={toggle}
        className={classNames({
          'opacity-100': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
          'fixed inset-0 bg-gray-900/80 transition-opacity ease-linear duration-300': true
        })}
      />

      <div
        className={classNames({
          'translate-x-0': isOpen,
          '-translate-x-full': !isOpen,
          'relative w-full h-full max-w-xs flex-1 bg-white flex flex-col gap-y-6 p-6 transition ease-in-out duration-300 transform': true
        })}
      >
        <div className='flex justify-between items-center'>
          <div>
            {' '}
            <Link href='/'>
              <img
                src='https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Fimages%2Fmesh_dojo_gradient.png&w=1920&q=75'
                alt='logo'
                className='w-7 h-7'
              />
            </Link>
          </div>
          <button onClick={toggle} type='button' className=''>
            <BsXLg className='h-6 w-6 text-black' />
          </button>
        </div>
        <div className='flex flex-col overflow-y-auto'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SidebarOffcanvas;
