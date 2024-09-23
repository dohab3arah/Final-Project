import React from 'react';

export default function Search() {
  return (
    <div className='w-full sm:w-72 h-28 rounded-md bg-gray-200 overflow-hidden'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>
        Search by property name
      </h2>
      <input
        type="search"
        className="mx-4  h-12 w-[calc(100%-2rem)] rounded border border-gray-300 px-3 text-base text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        placeholder="e.g., Beach westpalm"
      />
    </div>
  );
}
