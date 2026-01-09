import React from "react";
import Navbar from "./../components/commoncomponents/Navbear";
import Banner from "./../components/commoncomponents/Banner";
import About from "./../components/home/About";
import Location from "./../components/home/Location";
import Header from "./../components/commoncomponents/Header";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Location />
    </>
  );
};

export default Home;


