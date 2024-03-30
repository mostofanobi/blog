import React from 'react';

import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <img
        src='https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Fimages%2Fmesh_dojo_gradient.png&w=1920&q=75'
        alt='logo'
        className='w-7 h-7'
      />
    </Link>
  );
};

export default Logo;
