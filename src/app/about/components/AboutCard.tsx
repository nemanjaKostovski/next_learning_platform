import { AboutCardType } from "@/app/types";
import Image from "next/image";

export default function AboutCard({ items }: AboutCardType) {
  return (
    <div className="flex flex-col text-center sm:flex-row">
      {items.map((item) => (
        <div className="mr-4 flex flex-col" key={item.name}>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src={item.imageSrc}
              alt="user image"
              width={150}
              height={150}
            />
          </div>
          <h2 className="mb-2 text-2xl font-bold">{item.name}</h2>
          <p className="mb-2 text-indigo-400">{item.title}</p>
          <p className="w-56">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
