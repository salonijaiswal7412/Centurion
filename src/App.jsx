import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';


function App() {
  const locomotiveScroll=new LocomotiveScroll();
  return (
    
    <div  className='min-h-screen overflow-hidden bg-[#141414]'>
      
      <Hero/>
      <About/>
      <Services/>
      
      
    </div>
  )
}

export default App
