import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCity, FaGlobe } from "react-icons/fa";

export default function MenuActivity() {
  return (
    <div >
      <h1 className="text-white text-4xl font-bold mb-8 text-center">Menu</h1>
      <ul className="flex flex-col md:flex-row md:justify-center gap-6">
        <li>
          <Link
            to="/add/add-country"
            className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            <FaGlobe className="text-white text-2xl" />
            <span className="text-white text-lg font-semibold">Add Country</span>
          </Link>
        </li>
        <li>
          <Link
            to="/add/add-city"
            className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            <FaCity className="text-white text-2xl" />
            <span className="text-white text-lg font-semibold">Add City</span>
          </Link>
        </li>
        <li>
          <Link
            to="/add/ResidanceForm"
            className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            <FaHome className="text-white text-2xl" />
            <span className="text-white text-lg font-semibold">Add Residence</span>
          </Link>
        </li>
        <li>
          <Link
            to="/add/add-room"
            className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          ><i class="fa-solid fa-restroom text-white fa-xl"></i>
            <span className="text-white text-lg font-semibold">Add Room</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
