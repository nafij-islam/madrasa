import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Service from './pages/Service';
import Rootlayouts from './layouts/Rootlayouts';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayouts/>}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
};

export default App;
