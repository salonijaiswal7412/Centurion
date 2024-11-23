import { useGSAP } from '@gsap/react';  
import { gsap } from 'gsap';
import React, { useEffect } from 'react';

function Navbar() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".ele", {
      opacity: 0,
      x: -50,  
      stagger: 0.2,
      duration: 0.3
    });
  });

  return (
    <div className='w-[100%] text-xl flex justify-between'>
      <div className="menu flex flex-col gap-2">
        <a href="#hero" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">Home</a>
        <a href="#about" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">About Us</a>
         <a href="#container" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">Services</a>
        <a href="#whyus" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">Why Us</a>
        <a href="#client" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">testimonials</a>
        <a href="#contact" className="ele text-white uppercase text-[1rem] hover:text-yellow-400">Contact Us</a>
      </div>

      <div className="logo">
        <img className="w-[5rem]" src="./SRC/assets/Images/logo.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
