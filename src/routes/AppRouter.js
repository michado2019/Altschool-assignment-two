import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";

let Home = React.lazy(() => import("../pages/home/Home"));
export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
