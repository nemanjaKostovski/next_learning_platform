"use client";

import Logo from "../common/Logo";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MobileNavbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <>
      <div className="flex w-full justify-start pt-6 sm:hidden">
        <button
          id="dots-button"
          className="ml-6 h-8 w-8 cursor-pointer"
          onClick={handleToggle}
        >
          <Image
            src={"/dots.png"}
            width={24}
            height={24}
            alt="menu"
            className={`${toggle && "hidden"}`}
          />
        </button>
        <div className={`${toggle && "hidden"} absolute left-32`}>
          <Logo />
        </div>
      </div>
      <section
        className={`fixed left-0 top-0 z-10 h-full w-2/3 bg-white text-2xl transition-transform duration-300 ${
          toggle ? "translate-x-0 transform" : "-translate-x-full transform"
        }`}
      >
        <button
          id="dots-button"
          className="ml-6 h-8 w-8 cursor-pointer"
          onClick={handleToggle}
        >
          <Image
            src={"/close.png"}
            width={24}
            height={24}
            alt="menu"
            className="absolute right-4 top-4"
          />
        </button>
        <nav className="flex flex-col items-center" aria-label="mobile">
          <Link className="ml-8 w-full py-6 text-gray-600" href="/blog">
            Blog
          </Link>
          <Link className="ml-8 w-full py-6 text-gray-600" href="/pricing">
            Pricing
          </Link>
          <Link className="ml-8 w-full py-6 text-gray-600" href="/about">
            About Us
          </Link>
          <Link className="ml-8 w-full py-6 text-gray-600" href="/account">
            My Account
          </Link>
        </nav>

        <button
          id="signout-button"
          className="absolute bottom-4 ml-6 flex h-20 w-full cursor-pointer items-center align-middle text-gray-600"
        >
          <Image
            src={"/signout.png"}
            width={24}
            height={24}
            alt="sign-out"
            className=""
          />
          <span className="ml-4">Sign out</span>
        </button>
      </section>
    </>
  );
}
