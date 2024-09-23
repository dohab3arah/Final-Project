import React, {useState} from 'react';
import {Button, IconButton} from "@mui/material";

export default function Rating({onRatingChange}) {
    const [selected, setSelected] = useState(null);
    const onRateClick = (e) => {
        onRatingChange(Number(e.target.id));
        setSelected(Number(e.target.id));
    }
    const onClear = () => {
        setSelected(null);
        onRatingChange(null);
    }
  return (
    <div className='container flex flex-col w-full sm:w-72 h-70 rounded-md border-2 border-gray-300 overflow-hidden ab'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>Rating</h2>
      <p className='px-4 text-sm text-gray-600 mt-4'>Show only ratings more than</p>
      <div className='flex justify-around mt-4' onClick={onRateClick}>
        {[1, 2, 3, 4, 5].map((rating) => (
            <IconButton  id={rating} key={rating}
                         sx={{display: "flex", alignItems: "center", background: selected === rating ? "#a5abb5 !important" : "transparent"}}>
                <p id={rating} className='text-sm'>{rating}</p>
                <i id={rating} className='fa-solid fa-star text-yellow-400 ml-1'></i>
            </IconButton>
        ))}
      </div>
          <Button onClick={onClear}>Clear</Button>
    </div>
  );
}
