import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";

export default function ResultSearch({ room, allRoom, residence, filters }) {
  const navigate = useNavigate("");
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
const filterItems = (items)=>{
  let data = [...items];
  if(filters.min && filters.max){
    data = data.filter(t=> t.pricePerNight >= filters.min && t.pricePerNight <= filters.max);
  }
  if(filters.rate){
    data = data.filter(t=>t.rating >= filters.rate);
  }
  return data;
}
  useEffect(() => {
    if (residence) {
      setItems(filterItems(room));
    } else {
      setItems(filterItems(allRoom));
    }
  }, [room, allRoom, residence, filters]);

  const renderRoom = (room) => (
    <div
      key={room.id}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6  p-3 border rounded-md "
    >
      <div className="relative w-full h-48 sm:w-72 sm:h-56 object-cover rounded-md overflow-hidden">
        <img
          src={room.imageUrl}
          className="absolute w-full h-full object-cover"
          alt={room.residence || "Room"}
        />
      </div>
      <div className="flex flex-col grow">
        <h1 className="text-sm sm:text-xl roboto-medium mb-2 capitalize">
          {room.residence}
        </h1>
        <p className="text-sm sm:text-base mb-4">Rating {room.rating}/5</p>
        <p className="text-sm sm:text-base sm:w-[380px] mb-4 truncate">
          {room.description}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          Adults Capacity: {room.adultsCapacity}
        </p>
        <p className="text-xs sm:text-sm mb-4">
          Children Capacity: {room.childrenCapacity >= 0 ? room.childrenCapacity : 0}
        </p>
        <div className="flex flex-col-reverse sm:flex-row justify-between mt-auto">
          <button
            className="text-sm sm:text-base bg-[#2F80ED] hover:bg-[#2870ce] rounded-md h-10 sm:h-12 w-full sm:w-36 text-white mb-4 sm:mb-0"
            onClick={() => {
              navigate(`/Checkout/${room.id}`);
            }}
          >
            See availability
          </button>
          <div className="text-center sm:text-right">
            <span className="text-sm sm:text-xl roboto-medium">
              ${room.pricePerNight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 p-4">
      {currentItems.length > 0 ? (
        currentItems.map(renderRoom)
      ) : (
        <p className="text-center text-gray-500">
          No rooms available in this location.
        </p>
      )}


      
<ReactPaginate
  className="flex flex-wrap justify-center items-center space-x-2 mt-8"
  previousLabel={
    <span className="flex items-center px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700">
      <i className="fa-solid fa-chevron-left"></i>
      <span className="ml-2 hidden md:inline">Previous</span>
    </span>
  }
  nextLabel={
    <span className="flex items-center px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700">
      <span className="mr-2 hidden md:inline">Next</span>
      <i className="fa-solid fa-chevron-right"></i>
    </span>
  }
  breakLabel={
    <span className="px-3 py-1 hidden md:inline">...</span>
  }
  pageCount={Math.ceil(items.length / itemsPerPage)}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageClick}
  containerClassName="flex gap-2 flex-wrap"
  pageClassName="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 cursor-pointer"
  activeClassName="bg-blue-500 text-white"
  previousClassName="mr-2"
  nextClassName="ml-2"
  disabledClassName="opacity-50 cursor-not-allowed"
  breakClassName="cursor-default"
/>

    </div>
  );
}
