import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUs() {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div data-scroll data-scroll-speed="0.6" className='w-full h-screen bg-zinc-750 p-10 bg-[url("./src/assets/Images/WhyUS.png")] bg-cover'>
        <h1   className='text-center font-posterable text-6xl font-thin tracking-wide text-white  uppercase '>Why <span className='text-[#facc15] '>Choose</span> Us?</h1>
        <div className='mt-8 w-[40vw] m-auto'>
            <h3 data-aos="fade-left" className='text-center text-white text-3xl  duration-200 cursor-pointer peer hover:text-[#facc15] '>Advanced Technology</h3>
            <p  className='text-zinc-400 mt-4 opacity-0  m-auto text-justify  text-xs peer-hover:opacity-100'>At Centurion Print Point, we pride ourselves on using state-of-the-art printing technology. From high-definition digital printers to eco-friendly ink solutions, we ensure that every project is delivered with crisp, vibrant results that make a lasting impression.</p>

        </div>
        <div className='mt-8 w-[40vw] m-auto'>
            <h3 data-aos="fade-right"  className='text-center text-white text-3xl  duration-200 cursor-pointer peer hover:text-[#facc15] '>Fast TurnAround</h3>
            <p className='text-zinc-400 mt-4 opacity-0 w-[40vw] m-auto text-justify text-xs peer-hover:opacity-100'>We understand the importance of deadlines. Our streamlined processes and efficient workflow allow us to provide quick and reliable delivery, ensuring your projects are completed on time, every time. No more waiting weeks for your prints!</p>

        </div>
        <div className='mt-8 w-[40vw] m-auto'>
            <h3 data-aos="fade-left"  className='text-center text-white text-3xl  duration-200 cursor-pointer peer hover:text-[#facc15] '>Experienced Staff</h3>
            <p className='text-zinc-400 mt-4 opacity-0 w-[40vw] m-auto text-justify  text-xs  peer-hover:opacity-100'>Our team consists of seasoned professionals who are passionate about print. With years of experience in design and printing, we understand the nuances that make your project unique and work closely with you to bring your vision to life.</p>

        </div>
        <div className='mt-8 w-[40vw] m-auto'>
            <h3 data-aos="fade-right"  className='text-center text-white text-3xl  duration-200 cursor-pointer peer hover:text-[#facc08] '>Affordable Prices</h3>
            <p className='text-zinc-400 mt-4 opacity-0 w-[40vw] m-auto text-justify  text-xs peer-hover:opacity-100'>Quality printing shouldn’t break the bank. We offer competitive pricing options without compromising on quality, providing you with premium prints that fit within your budget. Experience value for money with every project.</p>

        </div>
        
      
    </div>
  )
}

export default WhyUs
