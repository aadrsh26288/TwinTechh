import React from 'react'
import transform from '../Img/yh.png'

const Transform = () => {
  return (
<div className='flex md:flex-row flex-col mt-10'>
    <div className='bg-green-400 flex flex-col justify-center md:w-4/6 pl-3 px-3 py-7 md:py-0'  style={{background:'#37978B'}}>
      <h1>Transform your home</h1>
      <p className='text-xl text-white'>Select the elements you want   and discover the system that's   right for you:</p>
      <a href='http://google.com'> <p className='text-2xl text-black italic'>Find out more</p></a>
    </div>
    <div className=' w-full md:p-10 p-4'  style={{background:'#D9D9D9'}}>
    <img src={transform} alt="transform" className='w-full md:ml-7 ml-0' />
    </div>

  
</div>

  )
}

export default Transform