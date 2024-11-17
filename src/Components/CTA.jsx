import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function CTA() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div data-aos="fade-up" className='w-full min-h-[50vh]  p-20'>
        <h1 className='text-8xl text-center font-posterable w-3/4 m-auto text-white'>Ready to Start Your <span className='text-9xl uppercase text-[#facc15]'>Project?</span></h1>
        <h3 className='text-lg w-2/3 text-center m-auto text-zinc-400'>Bring your ideas to life with the help of our expert printing services. Whether it’s business cards, banners, or custom apparel, we’re here to make your vision a reality. Contact us today to get started!</h3>
        <button className='border-2 outline-none border-[#facc15] rounded-full mx-[40%] mt-5 px-3 py-2 text-[#facc15] text-xl'>Get Started With Us</button>
      
    </div>
  )
}

export default CTA
