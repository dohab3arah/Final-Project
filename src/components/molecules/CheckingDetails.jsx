

export default function Checking({room}) {
  return (
    <div className="max-w-md shadow-md rounded-md  bg-white border border-gray-200 overflow-hidden">
      <div className='relative object-cover w-full h-[200px] '>
        <img className="absolute h-full w-full" src={room.imageUrl} alt="Hotel" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 capitalize">
            {room.residence}
          </h5>
          <div className="rating flex items-center">
            <p className=" text-sm font-medium text-gray-600">
              Raiting :{room.rating}/5
            </p>
          </div>
        </a>
        <div className="cardTextContent my-4 text-sm">
          <p>room number :{room.number}</p>
          <p className="leading-8 text-gray-600">Adults Capacity :{room.adultsCapacity}</p>
          <p className="leading-8 text-gray-600">Children Capacity: {room.childrenCapacity >=0 ? room.childrenCapacity : 0  }</p>
          <p className="leading-8 text-gray-600">Check in: Sunday, March 18, 2025</p>
          <p className="leading-8 text-gray-600">Check out: Tuesday, March 20, 2025</p>
        </div>
      </div>
    </div>
  );
}