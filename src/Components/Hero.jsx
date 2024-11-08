import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Navbar from './Navbar';

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".inner-content > *", {
      y: 500,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return (
    <div data-scroll data-scroll-speed="-0.5" className="bg-[#141414] h-screen w-full flex overflow-hidden">
      <div className="img w-1/2 overflow-hidden">
        <img
          src="https://files.oaiusercontent.com/file-fzYuamHGbM8L21N257Gg3kXS?se=2024-11-06T19%3A39%3A08Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db4a45a1e-8ee7-4ef8-a6b4-b8c459e94e92.webp&sig=OeWde77h0kP3HuZTni%2BlovJ76w%2Bt5vFZIt4dHyBIlWU%3D"
          alt=""
        />
      </div>
      <div className="content w-1/2 p-6 relative">
        <Navbar />
        <div className="inner-content z-10">
          <h1 className="text-[9vw] mt-10 text-yellow-400 tracking-wider leading-none font-bold font-posterable">
            centurion
          </h1>
          <h2 className="leading-tight mt-0 uppercase text-[2.5vw] tracking-[1.5rem] text-right text-white">
            prints point
          </h2>
          <p className="mt-5 w-[70%] ml-[28%] text-justify text-lg tracking-tight leading-tight text-zinc-400">
            "From vibrant business cards to striking banners, Centurion Print Point brings your ideas to life with precision and style. Discover a world of high-quality printing tailored to meet your needs."
          </p>
          <button className="w-[30%] px-2 py-3 text-xl font-semibold text-yellow-400 border-[1px] border-yellow-400 bg-transparent rounded-full absolute right-12 mt-5">
            Get Started With Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
