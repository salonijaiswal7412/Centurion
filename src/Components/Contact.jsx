import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Form from './Form';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-scroll data-scroll-speed="0.4" className='w-full min-h-screen'>
      <div  className="contact w-[80%] border-2 border-[#facc15] rounded-xl h-full m-auto p-10">
      <h2 data-aos="fade-up" className='text-center text-zinc-400 text-3xl'>We’re just a call or message away!</h2>
      <h1 data-aos="fade-up" className='text-7xl text-center text-[#facc15] font-posterable mt-5 tracking-wider uppercase'>Contact Us Now!!</h1>
      <div className="dets">
        <p className='text-2xl text-center text-zinc-400 mt-5'>Phone: +91-9386985221</p>
        <p className='text-2xl text-center text-zinc-400'>Email: centurionprint.jsr@gmail.com</p>
        <h3 className='text-5xl mt-14 font-posterable text-white text-center'>Send Us a <span className='text-[#facc15]'>Message</span></h3>
        <Form/>
        <p className='my-5 text-xl text-zinc-400 text-center'> Or</p>
        <h3 className='text-5xl mt-14 font-posterable text-white text-center'>Visit us At <span className='text-[#facc15]'>Store</span></h3>
        <h4 className='text-zinc-400 text-2xl text-center'>50,Thakurbari Road,Sakchi, Jamshedpur,Jharkhand-831001</h4>
        
      </div></div>
      
      
    </div>
  )
}

export default Contact
