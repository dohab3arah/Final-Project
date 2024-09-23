const CountryImage = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-full  h-[220px] object-cover rounded-tl-[8px] hover:scale-110  duration-300 "
    />
  );
  
  export default CountryImage;
  