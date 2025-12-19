import React from 'react'
import Navbar from './../components/commoncomponents/Navbear';
import Header from './../components/commoncomponents/Header';
import { Outlet } from "react-router";
const Rootlayouts = () => {
  return (
   <>
    <Header/>
     <Navbar/>
     <Outlet />
     <h1>footer</h1>
   </>
  )
}

export default Rootlayouts