import CountryCard from "../molecules/CountryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { CountryContext } from "../../views/Home";

const CountryGrid = () => {
const {countries} = useContext(CountryContext)
  return (
    <div className=" text-start pt-8 sm:w-11/12 mx-auto  my-[60px] px-3 ">
      <h2 className="md:text-3xl  font-bold mb-4">Enjoy your dream vacation</h2>
      <p
        className=" mb-4 text-start md:text-[16px]  text-[13px]"
      >
        Plan and book your perfect trip with expert advice, travel tips,
        destination information, and inspiration from us.
      </p>
      <Swiper
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          290: {
            slidesPerView: 1
          },
          340: {
            slidesPerView: 2
          },
          608: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        modules={[Navigation]}
        className="mySwiper "
      >
        {countries.map((countries) => (
          <SwiperSlide key={countries.id}>
            <CountryCard  countries={countries}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CountryGrid;
