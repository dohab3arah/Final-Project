import React from 'react';

export default function Activities() {
  return (
    <div className='container flex flex-col w-full sm:w-72 h-72 rounded-md border-2 border-gray-300 overflow-hidden'>
      <h2 className='bg-gray-200 text-gray-900 font-medium py-4 px-4 rounded-t-md'>Activities</h2>
      {['Fishing', 'Hiking', 'Cycling', 'Sauna', 'Night lights'].map((item, index) => (
        <label key={index} className='flex items-center px-4 mt-2'>
          <input className='h-5 w-5 rounded-md border-2 border-gray-300' type="checkbox" />
          <span className='ml-2 text-sm'>{item}</span>
          <span className='ml-auto text-sm'>200</span>
        </label>
      ))}
    </div>
  );
}
