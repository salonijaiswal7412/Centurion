import React from 'react'

function Card({image,title,desc}) {
  return (
    <div className='w-[90%] m-auto h-[80%]  bg-[#FACC15] rounded-3xl flex gap-5 items-center justify-center flex-col px-10 '>
        
        <img src={image} className='border-2 border-solid rounded-lg w-[60%] h-[55%] -mt-16' alt="" />
        <h2 className='text-5xl tracking-wider font-bold uppercase text-[white] -mt-4 p-10'>{title}</h2>
        <div className='text-xl text-center -mt-8 '>{desc}</div>
      
    </div>
  )
}

export default Card
