import React from 'react'
import FormSearch from '../molecules/FormSearch'



export default function Header() {
  const style={
    textShadow: '2px 2px 4px #000000'
  }
  return (
    <div  className='relative shadow-xl  xl:w-11/12 mx-auto h-[70vh] mt-[12px] bg-[url("../src/asserts/PNG/bg-header.png")] bg-cover bg-center  rounded-md'>
      <div className='text-center center text-white w-4/5'>
      <h1 className='sm:text-[32px] roboto-black sm:my-[20px] my-[10px] text-[20px]'>Enjoy Your Dream Vacation</h1>
      <p style={style} className='sm:text-xl text-[15px] roboto-regular leading-8 w-4/6 mx-auto'>Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
      </div>
     <div className='absolute sm:-bottom-10 -bottom-14 w-full'>
      <FormSearch/>
     </div>
   
    </div>
  )
}
