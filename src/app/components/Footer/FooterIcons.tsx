import Image from 'next/image';

export default function FooterIcons() {
  return (
    <div className='flex justify-between w-40 '>
      <Image
        className='w-8 h-8'
        src='/icons8-twitter-50.png'
        alt='twitter-icon'
        width={50}
        height={50}
      />
      <Image
        className='w-8 h-8'
        src='/icons8-facebook-50.png'
        alt='facebook-icon'
        width={50}
        height={50}
      />
      <Image
        className='w-8 h-8'
        src='/icons8-youtube-50.png'
        alt='youtube-icon'
        width={50}
        height={50}
      />
    </div>
  );
}
