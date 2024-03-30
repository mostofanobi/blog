import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200/50'>
      <div className='border-t py-4'>
        <div className='max-w-screen-2xl mx-auto px-6'>
          <div className='flex flex-col sm:flex-row gap-x-6 gap-y-1 items-center justify-center sm:justify-between text-zinc-500 text-xs'>
            <p>
              All rights reserved <span className='text-black'>@{new Date().getFullYear()}</span>
            </p>
            <p>
              Designed & Developed by{' '}
              <a
                href='https://mostofanobi.vercel.app/'
                target='_blank'
                className='text-black hover:underline hover:text-blue-600'
              >
                Mostofa Nobi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
