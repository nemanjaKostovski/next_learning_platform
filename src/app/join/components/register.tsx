"use client";

import Image from "next/image";
import Link from "next/link";
import InputReg from "./inputReg";
import { InputRegister } from "../.././types/index";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div className="mb-40 ml-20 h-full">
      <div>
        <h1 className="mb-5 pt-28 text-6xl font-semibold">Registration</h1>
        <p className="mb-5 w-[90%] text-xl text-gray-400">{as}</p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center">
          <Image src={imageSrc} alt={alt} width={451} height={676} />
        </div>
        <form className="padlr flex flex-col justify-evenly md:w-7/12">
          {inputs.map((input, index) => (
            <InputReg
              key={index}
              inputType={input.inputType}
              placeholder={input.placeholder}
              h3={input.h3}
            />
          ))}
          {pathname == "/join/trainer" && (
            <>
              <h3 className="font-bold text-slate-700">Specialization</h3>
              <select
                name="Specialization"
                id="trainer"
                className="input text-md"
              >
                <option value="" disabled selected hidden>
                  Please select
                </option>
                <option value="System Administrator">
                  System Administrator
                </option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="Backend Developer">Backend Developer</option>
              </select>
            </>
          )}
          <button className="btn btn--primary mt-10 h-14 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
