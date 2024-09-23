import { Outlet, useNavigate } from "react-router"
import SideBarActivity from "../components/organisem/SideBarActivity" 
import { useEffect, useState } from "react"

export default function Add() {
  const navigate = useNavigate();
  const [user, setUser] =useState();
  useEffect(()=>{
    const user = localStorage.getItem("userName");
    setUser(user);
    user == 'Manager' ? '':navigate('/')

  })
  return (
    <div>
      <SideBarActivity />
      <Outlet/>
    </div>
  )
}
