import Sidebar from "../components/organisem/Sidebar";
import ResultSearch from "../components/molecules/ResultSearch";
import Footer from "../components/organisem/Footer";
import FilterTab from "../components/organisem/FilterTab";
import FormSearch from "../components/molecules/FormSearch";
import { useEffect, useState } from "react";
import { getRoom } from "../API/endpoint/room";
import { useParams } from "react-router";

export default function Discover() {
  const [allRoom, setAllRoom] = useState([]);
  const [room, setRoom] = useState([]);
  const { id } = useParams();
  const [residence, setResidence] = useState(id);
  const [toggle, setToggle] = useState(false);
  const [filters, setFilters] = useState({min: null, max: null, rate: null});
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);

  };

  const getAllRoom = async () => {
    try {
      const response = await getRoom();
      setAllRoom(response.data.data || []);
    } catch (error) {
      console.error("Error 404, please reload the page");
    }
  };

  const filterRoom = () => {
    if (!residence) return;
    const roomFilteredByRes = allRoom.filter(
      (room) => room.residenceId === residence
    );
    setRoom(roomFilteredByRes);
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  useEffect(() => {
    filterRoom();
    scrollToTop();
  }, [allRoom, residence]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const selectFilter = (min, max) => {
    setFilters(prevState => ({...prevState, min, max}));
  }
  const onRatingChange = (rate) => {
    setFilters(prevState => ({...prevState, rate}))
  }
  return (
    <>
      <div className="h-[250px] gap-0 opacity-100 bg-gradient-to-b from-[#2969BF] to-[#144E9D] relative">
        <div className="absolute sm:-bottom-10 -bottom-14 w-full">
          <FormSearch />
        </div>
      </div>

      <div className="flex mt-[50px] xl:gap-[80px] md:gap-[10px] sm:gap-0">
        <div className="space-y-4">
          <Sidebar toggle={toggle} handleToggle={handleToggle} selectFilter={selectFilter} onRatingChange={onRatingChange} />
        </div>
        <div className="w-full xl:w-2/3 mx-auto">
          <FilterTab />
          <ResultSearch room={room} allRoom={allRoom} residence={residence} filters={filters} />
        </div>
      </div>
      <Footer />
    </>
  );
}
