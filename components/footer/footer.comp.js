import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';

import Link from 'next/link';

import LowerFooter from './lower-footer.comp';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='max-w-screen-2xl mx-auto p-6'>
        <div className='flex justify-between items-end'>
          <div>
            <h1 className='text-xl flex items-center gap-2'>
              Mostofa Nobi{' '}
              <a href='https://mostofanobi.vercel.app/' target='_blank' className='hover:text-blue-600'>
                <BsLink45Deg className='translate-y-px' />
              </a>
            </h1>
            <p className='text-xs text-zinc-500 mb-1.5'>Frontend Developer</p>
            <div className='w-8 h-px bg-black' />
            <div className='flex gap-4 mt-10'>
              <a
                href='https://www.linkedin.com/in/mostofanobi/'
                target='_blank'
                className='flex items-center gap-0.5 hover:underline'
              >
                Linkedin
                <GoArrowUpRight className='translate-y-0.5' />
              </a>
              <a
                href='https://github.com/mostofanobi/'
                target='_blank'
                className='flex items-center gap-0.5 hover:underline'
              >
                Github
                <GoArrowUpRight className='translate-y-0.5' />
              </a>
            </div>
          </div>
          <div className='flex gap-8'>
            <Link href='/demos' className='hover:underline'>
              Demos
            </Link>
            <Link href='/collections' className='hover:underline'>
              Collections
            </Link>
            <Link href='/demos' className='hover:underline'>
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <LowerFooter />
    </footer>
  );
};

export default Footer;
