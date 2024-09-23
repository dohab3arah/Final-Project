import { useNavigate } from "react-router";
import HotelImage from "../atoms/HotelImage";

import React from 'react'

export default function HotelCard({ residence }) {
  const navigate = useNavigate('');

  return (
    <div
    className="rounded-lg overflow-hidden border border-gray-200 shadow-lg duration-300 hover:shadow-xl cursor-pointer"
    onClick={()=>{
      navigate(`Discover/${residence.id}`);
    }}
  >
    <div className="relative overflow-hidden h-48">
      <HotelImage
        src={residence.imageUrl}
        alt={residence.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-xl font-semibold text-gray-800 truncate">{residence.name}</h3>
      <span className="text-sm text-gray-600">{residence.residenceType}</span>
    </div>
  </div>
  )
}
