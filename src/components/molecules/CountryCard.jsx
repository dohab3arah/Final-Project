import React from 'react';
import CountryImage from '../atoms/CountryImage';

export default function CountryCard({ countries }) {
  return (
    <div className="relative group cursor-pointer rounded-xl shadow-lg border overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <CountryImage src={countries.imageUrl} alt={countries.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold capitalize">{countries.name}</h3>
      </div>

      {/* Pop-up description with fixed height */}
      <div
        className="absolute left-0 top-0 w-full p-4 bg-white border rounded-xl shadow-lg transition-all duration-300 ease-in-out opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        style={{ zIndex: 10, height: '240px', overflowY: 'auto' }}
      >
        <p className="text-gray-600">
          {countries.description || 'No description available.'}
        </p>
      </div>
    </div>
  );
}
