import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../views/Home";
import { useNavigate } from "react-router";
import { getCountry } from "../../API/endpoint/country";
import { getResidence } from "../../API/endpoint/Residence";
import { getCity } from "../../API/endpoint/city";

export default function FormSearch() {
  const [country, setCountry] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [city, setCity] = useState("");
  const [residenceByCity, setresidenceByCity] = useState([]);
  const [res , setRes] = useState('');
  const [cites,setcites] = useState([])
  const [countries,setcountries] = useState([])
  const [residence,setresidence] = useState([])
  const navigate = useNavigate('');

  const getCountryData = async () => {
    try {
      const response = await getCountry();
      setcountries(response.data.data);
    } catch {
      console.error("");
    }
  };
  const getResidenceData = async () => {
    try {
      const response = await getResidence();
      setresidence(response.data.data);
    } catch {
      console.error("");
    }
  };
  const getCityData = async () => {
    try {
      const response = await getCity();
      setcites(response.data.data);
    } catch (e) {
      console.error("");
    }
  };


  useEffect(() => {
    getCountryData();
    getCityData();
    getResidenceData()
  }, []);
  useEffect(() => {
    if (country) {
      const filterCity = cites.filter((city) => city.country === country);
      setFilteredCities(filterCity);
    } else {
      setFilteredCities([]);
    }
  }, [country, cites]);

  useEffect(() => {

    if (city) {
      const filteredResidence = residence.filter((res) => res.city === city);
      setresidenceByCity(filteredResidence);
    } else {
      setresidenceByCity([]);
    }
  }, [city, residence]);

  return (
    <form
      className="md:w-10/12 shadow-xl mx-auto flex flex-wrap gap-[12px] py-[11px] px-[12px] bg-white rounded-lg"
      // onSubmit={handleSubmit}
    >
      <div className="flex md:grow-0 grow basis-64 gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-flag mt-1 text-gray-400"></i>
        <select
          id="countries"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option hidden>Country</option>
          {countries.map((country) => (
            <option className="text-base" key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-64 gap-[10px] md:grow-0 grow sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-city mt-1 text-gray-400"></i>
        <select
          id="city"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          disabled={!country}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option hidden>City</option>
          {filteredCities.map((city) => (
            <option className="text-base" key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-64 md:grow-0 grow gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-solid fa-hotel mt-1 text-gray-400"></i>
        <select
          id="hotel"
          className="bg-transparent outline-none roboto-regular text-sm w-full"
          disabled={!city}
          onChange={(e) => {
            setRes(e.target.value);
          }}
        >
          <option hidden>Residence</option>
          {residenceByCity.map((residence) => (
            <option
              className="text-base"
              key={residence.id}
              value={residence.id}
            >
              {residence.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className={`roboto-medium text-[15px] grow basis-80 cursor-pointer drop-shadow-lg 
          ${res ? 'hover:bg-[#2569c2] bg-[#2e79da]':'bg-[#4991ee]'} 
         sm:py-[11px] rounded-md text-white`}
        disabled={!country || !city || !res}
        type="submit"
        onClick={()=>{
          navigate(`/Discover/${res}`);
        }}
      >
        Search
      </button>
    </form>
  );
}
