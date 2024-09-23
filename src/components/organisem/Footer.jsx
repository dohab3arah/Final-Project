import React from 'react';
import ItemContiner from '../molecules/ItemContainer';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="py-7 px-4 md:px-6 lg:px-8">
        <ItemContiner />
      </div>

      <div className="bg-gray-200 py-3">
        <p className="text-gray-600 text-center text-sm md:text-base">
          © My Dream Place 2024
        </p>
      </div>
    </footer>
  );
}
