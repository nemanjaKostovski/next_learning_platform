import Logo from './Logo';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';
function Navbar() {
  return (
    <>
      <nav className='p-2 border-b-2 hidden sm:flex absolute w-full'>
        <Logo />
        <div className='ml-12 text-gray-500 text-sm flex place-items-center'>
          <Link href='/blog' className='mr-6'>
            Blog
          </Link>
          <Link href='/pricing' className='mr-6'>
            Pricing
          </Link>
          <Link href='/about' className='mr-6'>
            About Us
          </Link>
        </div>
        <div className='flex right-4 top-0 justify-end absolute h-full'>
          <button className='bg-transparent border-0 text-indigo-600 font-medium'>
            Sign in
          </button>
          <button className='btn btn--primary h-10 ml-3 mt-2 rounded'>
            Join us
          </button>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
}

export default Navbar;
