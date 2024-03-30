import React from 'react';
import { CgFormatSlash } from 'react-icons/cg';

import Link from 'next/link';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol role='list' className='flex flex-nowrap overflow-x-auto no-scrollbar items-center'>
        {paths.map((path) => {
          return (
            <li key={path}>
              <div className='flex items-center'>
                <CgFormatSlash className='h-5 w-5 flex-shrink-0 text-gray-300' />
                <Link href={`/${path}`} className='text-sm font-medium text-gray-500 hover:text-gray-700'>
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
