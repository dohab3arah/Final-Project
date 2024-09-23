import axiosInstance from "../axios/api";

export const getCountry = async () => {
    return  axiosInstance.get('Country');
};



export const addCountry = async (body) => {
    return await axiosInstance.post('Country/Create', body, {
        timeout: 20000,   
    });
};