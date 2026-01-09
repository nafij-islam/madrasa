import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Rootlayouts from './layouts/Rootlayouts';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details';

import Depertman from './pages/Depertman';
import Donation from './pages/Donation';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayouts/>}>
          <Route index element={<Home />} />
          <Route path="/আমাদের-পরিচিতি" element={<AboutUs />} />
          <Route path="/ভর্তি-তথ্য" element={<Details />} />
          <Route path="/শিক্ষক-ও-প্রশাসন" element={<Depertman />} />
          <Route path="/দান-ও-সহযোগিতা" element={<Donation />} />
          <Route path="/গ্যালারি" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
