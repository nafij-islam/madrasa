import React from 'react'
import Navbar from './../components/commoncomponents/Navbear';
import Header from './../components/commoncomponents/Header';
import { Outlet } from "react-router";
import Footer from './../components/commoncomponents/Footer';
const Rootlayouts = () => {
  return (
   <>
    <Header/>
     <Navbar/>
     <Outlet />
     <Footer/>
   </>
  )
}

export default Rootlayouts