import React, { useEffect, useState } from "react";
import PaymentOptions from "../components/molecules/PaymentOptions";
import UserInfo from "../components/molecules/UserInfo";
import Checking from "../components/molecules/CheckingDetails";
import PriceDetails from "../components/molecules/PriceDetails";
import ImpInformation from "../components/molecules/ImpInformation";
import { useParams } from "react-router";
import { roomDetails } from "../API/endpoint/room";

const CheckOut = () => {
  const {id} = useParams();
  const [room , setRoom] = useState([]);
  const getDataDetailes =async ()=>{
    try{
      const response = await roomDetails(id);
      setRoom(response.data.data);  
    }
    catch{
      console.error('error 404');
      
    }
  }
  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"instant"
    })
  }

  useEffect(()=>{
getDataDetailes();
scrollToTop();
  },[])
  return (
    <>
      
      <div className="booking-page flex  md:flex-row gap-4 my-[100px] flex-col-reverse ">
        <div className="left-column flex-1 space-y-4 ">
        <h1 className="text-xl font-semibold mx-[175px] ">Secure your reservation</h1>
          <UserInfo />
          <PaymentOptions />
          <ImpInformation />
        </div>
        <div className="right-column w-full md:w-1/3 space-y-4">
          <Checking  room={room}/>
          <PriceDetails />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
