import Navbar from './components/common/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/common/Hero';
import Image from 'next/image';

const hero = {
  header: "Let's start learning",
  text: 'Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!',
  imageSrc: '/homepage-image.png',
};

function App() {
  return (
    <>
      <Navbar />
      <Hero header={hero.header} text={hero.text} imageSrc={hero.imageSrc} />
      <section className=' w-3/4 h-96 ml-[12.5%] mr-[12.5%] mb-20 relative'>
        <Image
          src='/homepage2.png'
          alt='bg-image'
          className='absolute top-14 h-full'
          width={1914}
          height={1080}
        />
        <div className='flex flex-col justify-center items-center mt-20 mb-20 w-full h-96 absolute '>
          <h2 className=' text-indigo-600 text-4xl'>Join us</h2>
          <p className=' w-1/2 text-center'>
            Qui ut exercitation proident enim non tempor tempor ipsum ex nulla
            ea adipsicing sit consequat enim eilit cupidadat o
          </p>
          <button className='ml-3 bg-indigo-500 h-10 mt-2 p-2 rounded text-white font-medium'>
            Join us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
