import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import WhyUs from './Components/WhyUs';
import Client from './Components/Client';
import CTA from './Components/CTA';
import Contact from './Components/Contact';



function App() {
  const locomotiveScroll=new LocomotiveScroll();
  
  return (
    
    <div  className='min-h-screen overflow-hidden bg-[#141414]'>
      
      <Hero/>
      <About/>
      <Services/>
      <WhyUs/>
      <Client/>
      <CTA/>
      <Contact/>
      
      
    </div>
  )
}

export default App
