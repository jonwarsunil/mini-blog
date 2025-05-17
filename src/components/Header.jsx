'use client';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  return (
    <header className='w-full bg-white shadow-md sticky top-0 z-50'>
      <div className='container'>
        <div className='mx-auto px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap'>
          <Link href='/' className='text-xl font-bold text-purple-800'>
            Mini Blog 📝
          </Link>
          <Button label='+ New Post' href='/new-post' />
        </div>
      </div>
    </header>
  );
};

export default Header;
