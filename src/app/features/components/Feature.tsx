import Image from "next/image";

export default function Feature({
  imageSrc,
  imageFirst,
}: {
  imageSrc: string;
  imageFirst: boolean;
}) {
  return (
    <div className="mt-16 flex w-full flex-col justify-between md:flex-row">
      <div
        className={`order-${imageFirst ? "2" : "1"} flex flex-col justify-center md:w-2/5`}
      >
        <h1 className="text-2xl font-bold">Feature</h1>
        <p className="text-xl text-gray-400">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt
          consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <button className="btn btn--primary my-2 h-10 w-24 rounded-2xl">
          Try now
        </button>
      </div>
      <div
        className={`order-${imageFirst ? "1" : "2"} flex items-center justify-center md:w-2/5`}
      >
        <Image src={imageSrc} alt="feature1" width={640} height={520} />
      </div>
    </div>
  );
}
