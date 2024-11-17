import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from './Card';
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


gsap.registerPlugin(ScrollTrigger);

function Services() {
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <main id="container" className="w-screen h-screen overflow-hidden flex">
     
      <section className="horizontal-section flex-shrink-0 p-16 w-full h-full  justify-center items-center bg-[#141414]">
        <h1 data-aos="fade-right" className="heading  tracking-wider uppercase  text-white text-8xl  heading font-posterable">Our <span  className='text-[#facc15]'>Services</span></h1>
        <div data-aos="fade-right" className="vid w-[80%] bg-red-400 m-auto h-[80%] border-solid border-yellow-400 border-2 rounded-2xl mt-10 overflow-hidden">
        <video  data-aos="fade-right"
          src='./src/assets/Images/Servicesvid.mp4'
          autoPlay
          controls
          muted
          loop
          className="w-full h-full object-cover"
        />

        </div>
      </section>

      
      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
        <Card image="https://i.pinimg.com/474x/d0/a5/f1/d0a5f110d6bf883627aab52aba7dfc99.jpg" title="Business Cards" desc="We offer premium, customizable business cards, designed to reflect your professional image. With a range of finishes like matte, glossy, and textured, our cards ensure you leave a memorable impression at every opportunity."/>
      </section>

      
      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
      <Card desc="We provide high-quality, customizable flyers and brochures perfect for marketing. Whether for an event or business promotion, choose from various sizes and folds to effectively communicate your message and engage your target audience." image="https://i.pinimg.com/474x/b4/f9/d8/b4f9d8b54806305f08c9505d56712b7d.jpg" title="Flyers/Brochures"/>
      </section>

      
      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
      <Card title="Posters" image="https://i.pinimg.com/474x/dc/f0/87/dcf087a2268cf00d274612a7e75498b4.jpg" desc="We create vibrant, custom posters tailored to your needs. Whether for promotions, events, or personal projects, our posters are printed on premium materials, ensuring your message stands out in any setting with clarity and color."/>
      </section>

      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
      <Card title="Banners" image="https://i.pinimg.com/474x/7d/ec/f3/7decf31e59e218e22e9f614a02f22ed8.jpg" desc="We offer durable, eye-catching banners for both indoor and outdoor use. With high-quality materials like vinyl, mesh, and fabric, our banners are perfect for events,or storefront displays to attract attention and communicate effectively."/>
      </section>
      
      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
      <Card title="Custom T-shirts" image="https://i.pinimg.com/474x/ae/95/64/ae95649a059e3fe90995d4275a8c4115.jpg" desc="We design custom T-shirts, ideal for events, promotions, or personal branding. With top-notch printing quality and customizable options, we help you create comfortable and stylish apparel that reflects your unique identity and message."/></section>
      
      <section className="horizontal-section flex-shrink-0 w-1/2 h-full flex justify-center items-center bg-[#141414]">
      <Card title="calendars" image="https://i.pinimg.com/474x/97/3f/4f/973f4f33bd4e80c3a57f1972085e3d0a.jpg" desc="We design personalized wall calendars that are functional and promotional. Customizable with your branding, these calendars serve as year-round reminders of your business, offering visibility while keeping clients and employees organized."/></section>
      
      
    </main>
  );
}

export default Services;
