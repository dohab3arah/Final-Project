import React from 'react'
// import { useNavigate } from 'react-router-dom';

export default function OffersLink() {
//     const navigate = useNavigate();

//     const goOffersPage= ()=>{
// navigate('/offer')
//     }
  return (<>

  <div  className='cursor-pointer h-[280px] w-11/12   mx-auto bg-cover pt-4 bg-[url(../src/asserts/PNG/offersLink.png)] xl:rounded-xl'>
 <div className=' md:w-[580px]  ml-16 pt-[40px] '>
    <p className='text-white sm:text-3xl text-xl roboto-medium '>
    Discover our exceptional hotel deals now and enjoy a luxurious stay at the lowest prices
    </p>
    <button className='roboto-medium text-white h-[44px] w-[146px] text-[15px] leading-5 mt-[30px] hover:bg-[#2467c0] bg-[#2F80ED] rounded-md'>
    Discover Deals
    </button>
 </div>
  </div>
  </>
  )
}

