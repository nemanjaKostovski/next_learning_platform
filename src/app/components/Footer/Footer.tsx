import Logo from '../common/Logo';
import FooterIcons from './FooterIcons';
import FooterRow from './FooterRow';
import Image from 'next/image';

const footerItems = [
  [
    { link: '/product', heading: 'Product' },
    { link: '/features', heading: 'Features' },
    { link: '/pricing', heading: 'Pricing' },
  ],
  [
    { link: '/resources', heading: 'Resources' },
    { link: '/blog', heading: 'Blog' },
    { link: '/user-guides', heading: 'User guides' },
    { link: '/webinars', heading: 'Webinars' },
  ],
  [
    { link: '/company', heading: 'Company' },
    { link: '/about-us', heading: 'About Us' },
    { link: '/contact-us', heading: 'Contact Us' },
  ],
];

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className='pl-[1%] pr-[1%] sm:pl-[10%] sm:pr-[10%] gap-x-8 gap-y-4 pt-10 bg-gray-50'>
      <div className='xl:flex justify-between border-b-2 lg:grid col-span-2'>
        <Logo />
        <FooterRow items={footerItems} />
        <div className='col-span-2 mb-10'>
          <h2 className='text-2xl font-bold text-indigo-500'>
            Subscribe to our newsletter
          </h2>
          <p className='mb-10'>
            For product announcements and exclusive insights
          </p>
          <div className='relative'>
            <Image
              src='/envelope.png'
              width={16}
              height={16}
              alt='email-icon'
              className='absolute top-3 left-3 w-4 h-4'
            />
            <div className='flex'>
              <input
                className='w-80 h-10 rounded-lg rounded-r-none border-[1px] border-gray-500 pl-12'
                type='text'
                placeholder='Input your email'
              />
              <button className='btn btn--primary rounded-lg rounded-l-none w-32'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 pb-6 flex justify-between sm:flex-row flex-col items-center'>
        <select
          name='language'
          id='language'
          className='bg-gray-200 p-1 rounded w-32'
        >
          <option value='English'>English</option>
        </select>
        <p className='text-gray-700 font-medium'>
          &copy; Learn, {year} inc <strong>&middot;</strong> Privacy{' '}
          <strong>&middot;</strong> Terms
        </p>
        <FooterIcons />
      </div>
    </footer>
  );
}

export default Footer;
