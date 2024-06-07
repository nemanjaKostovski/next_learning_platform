import { HeroType } from "../../types/index";
import Image from "next/image";

function Hero({ header, text, imageSrc }: HeroType) {
  return (
    <>
      <h1 className="pt-28 text-center text-6xl font-bold">{header}</h1>

      <div className="mt-10 flex justify-center">
        <p className="w-4/5 text-center text-xl text-gray-400 sm:w-3/5">
          {text}
        </p>
      </div>
      <div className="flex items-center justify-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="homepage"
            width={1127}
            height={626}
            className="mt-16"
          />
        )}
      </div>
    </>
  );
}
export default Hero;
