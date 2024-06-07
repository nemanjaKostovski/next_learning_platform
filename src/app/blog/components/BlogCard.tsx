import { BlogCardType } from "@/app/types";
import Image from "next/image";

export default function BlogCard({ items }: BlogCardType) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:flex-row">
      {items.map((item) => (
        <div
          className="relative col-span-1 mb-4 mr-4 flex w-80 flex-col rounded-xl border border-indigo-200"
          key={item.title}
        >
          <div className="mb-4 flex items-center justify-center">
            <Image
              src={item.imageSrc}
              alt="blog image"
              width={300}
              height={300}
              className="h-64 w-80 rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-indigo-400">{item.desc}</p>
            <h2 className="mb-2 text-2xl font-bold">{item.title}</h2>
            <p className="w-40 text-sm text-gray-500">{item.date}</p>
            <p className="absolute bottom-4 right-4 w-20 rounded-full border-2 text-center text-gray-500">
              {item.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
