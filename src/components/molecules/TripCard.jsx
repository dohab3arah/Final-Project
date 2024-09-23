
const TripCard = ({ image, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-fill"
      />
      <div className="absolute bottom-0 left-0  right-0 p-4  bg-gradient-to-t from-black ">
        <h3 className="text-xl w-full font-semibold text-white">{title}</h3>
        <p className="text-xs text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TripCard;
