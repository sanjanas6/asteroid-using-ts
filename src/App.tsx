import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./components/info/Index";
import Information from "./components/information/info";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info" element={<Information />} />
        <Route path="*" element={<PageNotFound />}  />
      </Routes>
    </div>
  );
};

export default App;
