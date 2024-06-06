import { HeroType } from "../../types/index";
import Image from "next/image";

function Hero({ header, text, imageSrc }: HeroType) {
  return (
    <>
      <h1 className="pt-28 text-center text-6xl font-bold">{header}</h1>

      <div className="mt-10 flex justify-center">
        <p className="w-2/5 text-center text-xl">{text}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="homepage"
          width={957}
          height={540}
          className="mt-16"
        />
      </div>
    </>
  );
}
export default Hero;
