import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({links , title }) {
  return (
   <ul >
    <h1 className='mb-1 roboto-medium font-bold  text-[16px] hover:underline hover:decoration-blue-500 '>{title }</h1>
    {
        links.map((link)=> (
            <li  key={link.name}> 
                <Link className='text-[#4F4F4F] roboto-regular text-[14px] hover:underline hover:decoration-blue-500 '  to={links.link}>{link.name}</Link>
            </li>
        ))
    }

   </ul>
  )
}