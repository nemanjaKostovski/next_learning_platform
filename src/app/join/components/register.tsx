import Image from "next/image";
import Link from "next/link";
import InputReg from "./inputReg";
import { InputRegister } from "../.././types/index";

export default function Register({
  as,
  imageSrc,
  alt,
  inputs,
}: {
  as: string;
  imageSrc: string;
  alt: string;
  inputs: InputRegister[];
}) {
  return (
    <div>
      <h1 className="pt-28 text-center text-6xl font-bold">Registration</h1>
      <p className="w-[90%] text-xl text-gray-100">{as}</p>
      <div className="flex flex-row">
        <div className="flex items-center justify-center md:w-2/5">
          <Image src={imageSrc} alt={alt} width={451} height={676} />
        </div>
        <form className="flex flex-col items-center justify-center md:w-3/5">
          {inputs.map((input, index) => (
            <InputReg
              key={index}
              inputType={input.inputType}
              placeholder={input.placeholder}
              h3={input.h3}
            />
          ))}
          <button className="btn btn--primary ml-3 mt-2 h-10 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
