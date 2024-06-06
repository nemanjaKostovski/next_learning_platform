import Logo from "../common/Logo";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
function Navbar() {
  return (
    <>
      <nav className="absolute hidden w-full border-b-2 p-2 sm:flex">
        <Logo />
        <div className="ml-12 flex place-items-center text-sm text-gray-500">
          <Link href="/blog" className="mr-6">
            Blog
          </Link>
          <Link href="/pricing" className="mr-6">
            Pricing
          </Link>
          <Link href="/about" className="mr-6">
            About Us
          </Link>
        </div>
        <div className="absolute right-4 top-0 flex h-full justify-end">
          <button className="border-0 bg-transparent font-medium text-indigo-600">
            Sign in
          </button>
          <button className="btn btn--primary ml-3 mt-2 h-10 rounded">
            Join us
          </button>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
}

export default Navbar;
