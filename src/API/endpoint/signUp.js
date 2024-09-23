import axiosInstance from "../axios/api"

export const signUp=async(body)=>{
    return axiosInstance.post('Auth/Register',body)
}