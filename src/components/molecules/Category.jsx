import React, { useState } from 'react';

export default function Category() {
  const [category, setCategory] = useState("categories");

  const filterCategory = (catItem) => {
    const result = categories.filter((curCategory) => {
      return curCategory.category === catItem;
    });
    setCategory(result);
  }

  return (
    <div className='container flex flex-col w-full sm:w-72 h-72 rounded-md border-2 border-gray-300 space-y-4 overflow-hidden'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>Popular Filters</h2>
      {['Free cancellation', 'Spa', 'Beach front', 'Hot tub/ jacuzzi', 'Book without credit card', 'No prepayment'].map((item, index) => (
        <label key={index} className='flex items-center px-4'>
          <input className='h-5 w-5 rounded-md border-2 border-gray-300' type="checkbox" />
          <span className='ml-2 text-sm' onClick={() => filterCategory(item)}>{item}</span>
          <span className='ml-auto text-sm'>200</span>
        </label>
      ))}
    </div>
  );
}
