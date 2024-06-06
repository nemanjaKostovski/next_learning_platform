import Link from "next/link";
import { FooterRowType } from "../../types/index";

export default function FooterRow({ items }: FooterRowType) {
  return (
    <div className="col-span-1 flex w-full flex-col justify-between text-center text-sm text-gray-500 sm:flex-row sm:text-left xl:w-fit">
      {items.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="mb-6 mr-1 flex flex-col text-sm text-gray-500 xl:mr-10 2xl:mr-20"
        >
          {group.map((item, itemIndex) => (
            <div key={`${item.link}-${itemIndex}`}>
              {itemIndex === 0 && (
                <h2 className="mb-6 text-2xl font-bold text-black">
                  <Link href={item.link}>
                    {item.heading && <h2>{item.heading}</h2>}
                  </Link>
                </h2>
              )}
              {itemIndex !== 0 && (
                <Link href={item.link} className="mb-2 block">
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
