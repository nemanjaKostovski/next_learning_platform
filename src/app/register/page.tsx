"use client";

import Image from "next/image";
import Input from "../components/common/Input";
import { useState } from "react";

export default function Register() {
  const [passVisibility, setPassVisibility] = useState(false);

  function handleVisibility() {
    setPassVisibility(!passVisibility);
  }

  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-bold">Register</h2>
      <p className="mb-10 text-lg text-gray-400">Welcome</p>
      <form>
        <Input
          imageSrc={"/user.png"}
          inputType={"email"}
          h3={"User Name"}
          placeholder={"Enter email"}
          alt={"user-icon"}
        />
        <Input
          imageSrc={"/padlock.png"}
          inputType={passVisibility ? "text" : "password"}
          h3={"Password"}
          placeholder={"Enter password"}
          alt={"password"}
        >
          <Image
            src={passVisibility ? "/view.png" : "/hide.png"}
            width={16}
            height={16}
            alt="padlock"
            className="absolute right-3 top-9 h-4 w-4 hover:cursor-pointer"
            onClick={handleVisibility}
          />
        </Input>

        <button className="btn btn--primary w-80 rounded-lg">Sign In</button>
      </form>
    </section>
  );
}
