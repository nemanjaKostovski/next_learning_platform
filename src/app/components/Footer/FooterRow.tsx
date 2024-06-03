import Link from 'next/link';
import { FooterRowType } from '../../types/index';

export default function FooterRow({ items }: FooterRowType) {
  return (
    <div className='text-gray-500 text-sm flex'>
      {items.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className='mb-6 text-gray-500 text-sm flex flex-col mr-1 2xl:mr-20 xl:mr-10'
        >
          {group.map((item, itemIndex) => (
            <div key={`${item.link}-${itemIndex}`}>
              {itemIndex === 0 && (
                <h2 className='text-2xl font-bold text-black mb-6'>
                  <Link href={item.link}>
                    {item.heading && <h2>{item.heading}</h2>}
                  </Link>
                </h2>
              )}
              {itemIndex !== 0 && (
                <Link href={item.link} className='block mb-2'>
                  {item.heading && <h2>{item.heading}</h2>}
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
