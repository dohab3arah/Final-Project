import axiosInstance from "../axios/api";

export const getProfile = async () => {
    const userName = localStorage.getItem("userName") || '';
    const response = await axiosInstance.get(`User/Profile/${userName}`);    
    return response;
};

export const updateProfile =async (body)=>{
    const userName = localStorage.getItem("userName") || '';
    const response = await axiosInstance.put(`User/Profile/${userName}`,body );
    return response ;
}