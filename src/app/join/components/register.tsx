"use client";

import Image from "next/image";
import InputReg from "./inputReg";
import { RegisterType } from "../.././types/index";
import { usePathname } from "next/navigation";

export default function Register({
  role,
  imageSrc,
  alt,
  inputs,
}: RegisterType) {
  const pathname = usePathname();

  return (
    <div className="mb-40 h-full sm:ml-10 lg:ml-20">
      <div>
        <h1 className="mb-5 pt-28 text-6xl font-semibold">Registration</h1>
        <p className="mb-5 w-[90%] text-xl text-gray-400">{role}</p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center">
          <Image src={imageSrc} alt={alt} width={451} height={676} />
        </div>
        <form className="padlr mt-4 flex flex-col justify-evenly sm:mt-0 md:w-7/12">
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
