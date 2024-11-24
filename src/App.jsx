import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";


import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import Client from "./Components/Client";
import CTA from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Trial from "./Components/Trial";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-hidden bg-[#141414]">
        {/* Routes */}
        <Routes>
          {/* First Page with All Components */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Client />
                <CTA />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Second Page with Only Trial Component */}
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
