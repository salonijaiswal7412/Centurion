import React, { useState } from 'react';


const Trial = () => {
    const [image, setImage] = useState(null);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div data-scroll data-scroll-speed="1"className='w-full min-h-screen bg-[#141414] p-10'>

            <h1 className='text-8xl text-center font-posterable text-zinc-300'>Upload Your <span className='text-[#facc15]'>Design </span></h1>
            <h2 className='text-5xl text-center font-posterable text-zinc-500'>and See It on Realistic Mockups</h2>
            <div className='bg-gradient-to-b to-[#141414] from-zinc-800 w-[80vw] m-auto p-10 mt-5 rounded-[3rem] '><div className='w-[70vw] text-xl text-justify  m-auto rounded-full mt-5 text-zinc-400'>Bring your designs to life and see how they will look on real-world products! Whether you're creating business cards, banners, or t-shirts, you can upload your artwork and instantly view it on various mockups.</div>
                <div className='w-[70vw] text-xl text-justify  m-auto rounded-full mt-5 font-semibold text-white tracking-wider'>At Centurion Print Point, we believe in helping you visualize your projects before they go to print. Upload your design below, and we'll show you how it will appear on a range of popular mockups like business cards, posters, t-shirts, and more. See your ideas come to life with a simple click.</div>
                <h2 className='text-4xl mt-8 text-center font-posterable text-[#facc15] tracking-widest'>How It Works:</h2>
                <ul className='text-center'><li className='text-zinc-400 text-2xl '>1. Upload your design</li>

                    <li className='text-zinc-400 text-xl '>2. Choose Your mockup</li>
                    <li className='text-zinc-400 text-xl '>3. Preview your Designs</li></ul>
                <div className='w-[44vw] text-xl text-justify font-semibold  m-auto rounded-full mt-5 text-white'>"Upload your design and start exploring the possibilities today! It's easy, fast, and gives you a realistic preview of your work."</div></div>
            <div className=' bg-[#facc15]  text-center w-[30vw] m-auto mt-10 p-5 rounded-full  text-lg font-semibold '><input type="file" onChange={handleImageChange} /></div>
            <div className="main bg-[#facc15] rounded-xl w-full mt-10 h-[180vh] flex justify-evenly ">
                <div className="col flex flex-col w-[30%] gap-10 py-10">
                    <div className=' shadow-2xl relative bg-[url("https://i.pinimg.com/736x/49/5f/31/495f31557b0f9afb0f37efe7daafc668.jpg")] bg-cover w-[100%] h-1/2 rounded-lg '>
                        <img src={image} alt="" className='absolute top-[26%] w-[37%] h-[41%] left-[35%]' />
                    </div>
                    <div className='shadow-2xl relative bg-[url("https://i.pinimg.com/474x/52/88/87/528887649b8b9dfaea32a0b7cbe92632.jpg")] bg-cover w-[100%] h-1/2 rounded-lg '>
                        <img src={image} alt="" className='absolute top-[45%] w-[40%] h-[44%] left-[30%]' />
                    </div>



                </div>
                <div className="col flex flex-col  w-[30%] gap-10 py-10 ">
                    <div className='shadow-2xl relative bg-[url("https://i.pinimg.com/736x/90/79/4e/90794e042b5eb7a1c80017d3b74e5d9b.jpg")] bg-cover w-[100%] h-2/3 rounded-lg '>
                        <img src={image} alt="" className='absolute top-[29%] w-[60%] h-[63%] left-[22%]' />
                    </div>

                    <div className=' shadow-2xl relative bg-[url("https://i.pinimg.com/736x/6e/2f/e2/6e2fe2f6c7fafcddd753f36c1d4a8c54.jpg")] bg-cover w-[100%] h-1/3 rounded-lg '>
                        <img src={image} alt="" className='absolute top-[53%] w-[40%] h-[40%] left-[30%]' />
                    </div>

                </div>
                <div className="col flex flex-col w-[30%] gap-10 py-10 ">
                    
                    <div className='shadow-2xl relative bg-[url("https://i.pinimg.com/474x/5b/31/2e/5b312e2237e3f18fe914a930fb80a267.jpg")] bg-cover w-[100%] h-1/3 rounded-lg overflow-hidden'>
                        <img src={image} alt="" className='absolute top-[27%] w-[58%] h-[55%] left-[44%]' />
                    </div>

                    <div className='shadow-2xl relative bg-[url("https://i.pinimg.com/736x/46/65/f1/4665f165f312e453a9f273aaaf0f4bbc.jpg")] bg-cover w-[100%] h-1/3 rounded-lg overflow-hidden'>
                        <img src={image} alt="" className='absolute top-[25%] w-[60%] h-[47%] left-[36%]' />
                    </div>

                    <div className='shadow-2xl relative bg-[url("https://i.pinimg.com/736x/35/05/f8/3505f87d262b112da88178c5f9527b31.jpg")] bg-cover w-[100%] h-1/3 rounded-lg overflow-hidden'>
                        <img src={image} alt="" className='absolute top-[32%] w-[58%] h-[55%] left-[22%]' />
                    </div>

                    
                </div>

            </div>



            
        </div>
    );
};

export default Trial;
