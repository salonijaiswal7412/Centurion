import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-speed="-.2" mb-0 className='bg-[#facc15] bg-cover w-full h-[70vh] p-10 flex justify-end items-end '>
        <div className="about w-1/2 text-lg text-white p-10"><span className='text-[#141414] '>Centurion Print Point:</span><br></br> Your trusted partner in premium printing solutions. We combine cutting-edge technology, creativity, and precision to deliver prints that inspire and captivate. From small-scale designs to large-format banners, we bring your vision to life with unmatched quality.</div>
        <div className="links w-1/2 flex flex-col text-right">
            <h3 className=' font-bold'>Quick Links</h3>
            <a href="" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">home</a>
            <a href="About.jsx" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">About Us</a>
            <a href="" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">Services</a>
            <a href="" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">Portfolio</a>
            <a href="" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">Testimonials</a>
            <a href="" className="ele text-white uppercase font-xs text-[1rem] cursor-pointer hover:text-yellow-400">Contact US</a>
            <h3 className=' font-bold mt-10'>Stay Connected With Us</h3>
            <div className='text-white'>Excellence in every impression. Let’s create something extraordinary together!</div>
            <div className=' mt-5'>© 2024 Centurion Print Point. All rights reserved.</div>
        
        </div>



      
    </div>
  )
}

export default Footer
