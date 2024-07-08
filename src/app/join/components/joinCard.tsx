import Image from "next/image";
import Link from "next/link";

export default function JoinCard({
  imageSrc,
  alt,
  title,
  desc,
  link,
}: {
  imageSrc: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="mt-16 flex w-full flex-col justify-between bg-gray-50 sm:pl-20 md:flex-row">
      <div className="mb-2 flex flex-col justify-center md:w-3/5">
        <h1 className="mb-4 text-4xl font-bold xl:text-6xl">{title}</h1>
        <p className="w-[90%] text-xl text-gray-800">{desc}</p>

        <button className="btn--primary mt-4 w-24 rounded p-4 text-base font-medium text-white">
          <Link href={link}>Join us</Link>
        </button>
      </div>
      <div className="flex items-center justify-center md:w-3/5">
        <Image src={imageSrc} alt={alt} width={800} height={520} />
      </div>
    </div>
  );
}
