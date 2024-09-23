const HotelImage = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-full h-full  object-cover rounded-tl-[8px] hover:scale-110 duration-700"
    />
  );
  
  export default HotelImage;

  
  