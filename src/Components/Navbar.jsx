import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'

import About from './About'

function Navbar() {
    useGSAP(()=>{
        const tl = gsap.timeline();
    tl.from(".ele",{
        opacity:0,
        x:0,
        stagger:0.2,
        duration:0.3
    })
 
    

    })
    



    
  return (

    <div className='w-[100%] text-xl flex justify-between'>
        <div className="menu flex flex-col gap-2">
        <a href="" className="ele text-white uppercase md:font-medium sm:font-xs text-[1rem] cursor-pointer hover:text-yellow-400">home</a>
            <a href="About.jsx" className="ele text-white uppercase font-medium text-[1rem] cursor-pointer hover:text-yellow-400">About Us</a>
            <a href="" className="ele text-white uppercase font-medium text-[1rem] cursor-pointer hover:text-yellow-400">Services</a>
            <a href="" className="ele text-white uppercase font-medium text-[1rem] cursor-pointer hover:text-yellow-400">Portfolio</a>
            <a href="" className="ele text-white uppercase font-medium text-[1rem] cursor-pointer hover:text-yellow-400">Testimonials</a>
            <a href="" className="ele text-white uppercase font-medium text-[1rem] cursor-pointer hover:text-yellow-400">Contact US</a>
        </div>
        <div className="logo">
            <img className="w-[5rem]"src="./SRC/assets/Images/logo.png" alt="" />
        </div>


        
      
    </div>
  )
}

export default Navbar
