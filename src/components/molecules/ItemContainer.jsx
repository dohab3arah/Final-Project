
import React from 'react'
import Item from './Item'
import {Company , Explore, Terms ,Help} from './Menus'
import Logo from '../../views/Logo'


export default function ItemContiner() {
  return ( 
    <div className=' ipad:w-11/12  ml-4 w-full mobile:gap-x-[70px] gap-y-3 ipad:mx-auto grid xl:grid-cols-5 sm:grid-cols-3 mobile:grid-cols-2  grid-cols-1  text-left'> 
        <div className=' '>
         <Logo />  
         <a className='text-[#4F4F4F] roboto-regular text-[14px] '>Your next goto companion for travel</a>
        </div>  
        
        <Item links={Company} title="Company" />
      <div>
         <Item links={Explore} title="Explore"  />
         <a className='text-[#2F80ED] roboto-regular text-[14px] hover:underline hover:decoration-blue-500  '  href='#'>see more</a>
      </div>     
        <Item links={Terms} title="Terms and Policiy" />
        <Item links={Help} title="Help"  />
        </div>
      
  )
}