'use client';

import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MobileNavbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <>
      <div className='flex w-full justify-start sm:hidden pt-6'>
        <button
          id='dots-button'
          className='ml-6 h-8 w-8 cursor-pointer'
          onClick={handleToggle}
        >
          <Image
            src={'/dots.png'}
            width={24}
            height={24}
            alt='menu'
            className={`${toggle && 'hidden'}`}
          />
        </button>
        <div className={`${toggle && 'hidden'}  absolute left-32`}>
          <Logo />
        </div>
      </div>
      <section
        className={`fixed top-0 left-0 z-10 w-2/3 h-full bg-white text-2xl transition-transform duration-300 ${
          toggle ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <button
          id='dots-button'
          className='ml-6 h-8 w-8 cursor-pointer'
          onClick={handleToggle}
        >
          <Image
            src={'/close.png'}
            width={24}
            height={24}
            alt='menu'
            className='absolute top-4 right-4'
          />
        </button>
        <nav className='flex flex-col items-center ' aria-label='mobile'>
          <Link className='w-full py-6 ml-8 text-gray-600' href='/blog'>
            Blog
          </Link>
          <Link className='w-full py-6 ml-8 text-gray-600' href='/pricing'>
            Pricing
          </Link>
          <Link className='w-full py-6 ml-8 text-gray-600' href='/about'>
            About Us
          </Link>
          <Link className='w-full py-6 ml-8 text-gray-600' href='/account'>
            My Account
          </Link>
        </nav>

        <button
          id='signout-button'
          className='ml-6 w-full h-20 cursor-pointer text-gray-600 absolute bottom-4 flex align-middle items-center'
        >
          <Image
            src={'/signout.png'}
            width={24}
            height={24}
            alt='sign-out'
            className=''
          />{' '}
          <span className='ml-4'>Sign out</span>
        </button>
      </section>
    </>
  );
}
