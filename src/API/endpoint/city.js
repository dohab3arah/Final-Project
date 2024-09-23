import axios from "axios";
import axiosInstance from "../axios/api";

export const getCity = async () => {
    return  axiosInstance.get('City');
};

export const addCity = async (body) => {
  return await axiosInstance.post('City/Create', body, {
      timeout: 20000,   
  });
};