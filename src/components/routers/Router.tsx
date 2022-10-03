import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../info/Index";
import Information from "../information/info";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </div>
  );
};

export default Routers;
