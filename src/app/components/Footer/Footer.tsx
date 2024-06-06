import Logo from "../common/Logo";
import FooterIcons from "./FooterIcons";
import FooterRow from "./FooterRow";
import FooterSubscribe from "./FooterSubscribe";

const footerItems = [
  [
    { link: "/product", heading: "Product" },
    { link: "/features", heading: "Features" },
    { link: "/pricing", heading: "Pricing" },
  ],
  [
    { link: "/resources", heading: "Resources" },
    { link: "/blog", heading: "Blog" },
    { link: "/user-guides", heading: "User guides" },
    { link: "/webinars", heading: "Webinars" },
  ],
  [
    { link: "/company", heading: "Company" },
    { link: "/about-us", heading: "About Us" },
    { link: "/contact-us", heading: "Contact Us" },
  ],
];

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="gap-x-8 gap-y-4 bg-gray-50 pl-[1%] pr-[1%] pt-10 sm:pl-[10%] sm:pr-[10%]">
      <div className="justify-center border-b-2 lg:grid xl:flex xl:justify-between">
        <div className="mb-10 hidden w-full justify-center sm:flex xl:block xl:w-fit">
          <Logo />
        </div>
        <FooterRow items={footerItems} />
        <div className="hidden sm:block">
          <FooterSubscribe />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between pb-6 sm:flex-row">
        <select
          name="language"
          id="language"
          className="w-32 rounded bg-gray-200 p-1"
        >
          <option value="English">English</option>
        </select>
        <div className="my-10 block sm:hidden">
          <FooterIcons />
        </div>
        <div className="block w-5/6 text-center sm:hidden">
          <FooterSubscribe />
        </div>
        <p className="font-medium text-gray-700">
          &copy; Learn, {year} inc <strong>&middot;</strong> Privacy{" "}
          <strong>&middot;</strong> Terms
        </p>
        <div className="hidden sm:block">
          <FooterIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
