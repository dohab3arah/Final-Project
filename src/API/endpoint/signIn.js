import axiosInstance from "../axios/api"

export const Login =(body)=>{
    return axiosInstance.post('Auth/Login',body)
}