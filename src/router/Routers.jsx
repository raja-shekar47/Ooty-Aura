import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Visit from "../pages/Visit";
import PageLayout from "../layouts/PageLayout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout/>}>
        <Route index element={<Home />} />
        <Route path="visit" element={<Visit />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default Routers;
