import Logo from '../common/Logo';
import FooterIcons from './FooterIcons';
import FooterRow from './FooterRow';
import FooterSubscribe from './FooterSubscribe';

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
      <div className='xl:flex justify-center xl:justify-between border-b-2 lg:grid'>
        <div className='hidden w-full xl:w-fit mb-10 sm:flex xl:block justify-center'>
          <Logo />
        </div>
        <FooterRow items={footerItems} />
        <div className='hidden sm:block'>
          <FooterSubscribe />
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
        <div className='block sm:hidden my-10'>
          <FooterIcons />
        </div>
        <div className='block sm:hidden text-center w-5/6'>
          <FooterSubscribe />
        </div>
        <p className='text-gray-700 font-medium'>
          &copy; Learn, {year} inc <strong>&middot;</strong> Privacy{' '}
          <strong>&middot;</strong> Terms
        </p>
        <div className='hidden sm:block'>
          <FooterIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
