import React from 'react';

const Home = () => {
  return (
    <div className='py-6 md:ps-6'>
      <h1 className='text-3xl'>Hello there, Welcome to my blog</h1>
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-x-8 gap-y-10 mt-20'>
        {Array.from({ length: 10 }).map((__, i) => {
          return (
            <li key={i} className=''>
              <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100 before:opacity-0 hover:before:opacity-100'>
                <div className='relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                  <img
                    src='/img/category-thumbnails/application-ui/stacked.png'
                    alt=''
                    className='absolute inset-0 h-full w-full'
                  />
                </div>
                <h4 className='mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                  <a href='/'>
                    <span className='absolute -inset-2.5 z-10'></span>
                    <span className='relative'>Parallax Scroll</span>
                  </a>
                </h4>
                <p className='relative mt-1.5 text-xs font-medium text-slate-500'>scroll</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
