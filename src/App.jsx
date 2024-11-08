import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';


function App() {
  const locomotiveScroll=new LocomotiveScroll();
  return (
    
    <div  className='min-h-screen overflow-hidden bg-[#141414]'>
      
      <Hero/>
      <About/>
      
      
    </div>
  )
}

export default App
