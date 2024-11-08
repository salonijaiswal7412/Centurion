import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed=".1" className='pt-72 p-12 about z-20 xw-screen min-h-screen bg-[url("./src/assets/Images/AboutBg.png")] bg-cover   '>
      <div className="mission-outer flex ">
      <div className="content w-2/3 overflow-y-auto">
        <div data-scroll-speed="-0.1" data-scroll className="heading ">
          <h2 className='text-3xl'>At <span className='font-bold text-4xl tracking-wide text-white'>Centurion</span> Print Point,</h2>
          <h3 className='text-xl'>We believe that quality printing is more than just ink on paper—it's the heart of your brand.</h3>
        </div>
        <div className="mission mt-28 bg-[#141414] px-16  py-8 rounded-l-[6rem]">
          <h2 className='text-4xl font-semibold tracking-widest text-white '>Our Mission</h2>
          <p className='text-zinc-400 m-5 '>Established with a vision to bring exceptional quality and creative solutions to the world of printing, Centurion Print Point has been serving businesses and individuals alike. Our goal is simple: to provide you with vibrant, durable, and precise prints that leave a lasting impression.</p>
          <h3 className='my-3 text-white text-2xl'>Let us bring your <span className='font-bold text-[#facc15]'>ideas</span> to life!</h3>
        </div>


      </div>
      <div className="img w-1/3 mt-10">
        <img className="rounded-2xl " src="https://files.oaiusercontent.com/file-Q5kdOHVNjBt6IqMiiVtrgGUt?se=2024-11-07T19%3A45%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D468428b3-8216-4e55-9ae9-56732939fca7.webp&sig=tF7BtahIs50LM94sLs4jUavl7yfZWj14XByYiqyfuFI%3D" alt="" />
      </div>
      </div>
     
      <div className="values w-full h-[70vh]  mt-5 flex ">
        <div className="img w-1/3">
          <img  className="w-full m-10 h-[80%] rounded-xl "src="https://pikaso.cdnpk.net/private/production/1087672314/render.jpeg?token=exp=1757635200~hmac=230850f04013aa6decd881186fbc66dbe3d03289eb8152657dfc11875e908bce" alt="" />
        </div>
        <div className="values ">
          <div className="values-inner">
            <div className="w-[60vw] ml-10 bg-[#141414] h-[45vh] rounded-r-[6rem] mt-20 p-10">
              <h2 className='text-4xl font-semibold tracking-widest text-white '>Our Core Values </h2>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default About
