import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/common/Hero";
import Image from "next/image";

const hero = {
  header: "Let's start learning",
  text: "Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!",
  imageSrc: "/homepage-image.png",
};

function App() {
  return (
    <>
      <Navbar />
      <Hero header={hero.header} text={hero.text} imageSrc={hero.imageSrc} />
      <section className="relative mb-20 ml-[12.5%] mr-[12.5%] h-96 w-3/4">
        <Image
          src="/homepage2.png"
          alt="bg-image"
          className="z-1 absolute top-14 h-full"
          width={1914}
          height={1080}
        />
        <div className="z-1 absolute mb-20 mt-20 flex h-96 w-full flex-col items-center justify-center">
          <h2 className="text-4xl text-indigo-600">Join us</h2>
          <p className="w-1/2 text-center">
            Qui ut exercitation proident enim non tempor tempor ipsum ex nulla
            ea adipsicing sit consequat enim eilit cupidadat o
          </p>
          <button className="ml-3 mt-2 h-10 rounded bg-indigo-500 p-2 font-medium text-white">
            Join us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
