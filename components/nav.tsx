'use client';

import Link from 'next/link';

interface NavProps {}
export function Nav() {
  return (
    <div className='flex items-center justify-between px-6 py-4'>
      <div className='flex items-center mr-6'>
        <Link href='/'>Icon Logo</Link>
      </div>
      <nav className='flex gap-6'>
        <Link href='/#features'>Features</Link>
        <Link href='/#pricing'>Pricing</Link>
        <Link href='/#about'>About</Link>
      </nav>
      <nav className='ml-auto'>
        <Link href='/login'>Login</Link>
      </nav>
    </div>
  );
}
