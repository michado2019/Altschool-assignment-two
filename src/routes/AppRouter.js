import React from "react";
import { Route, Routes } from "react-router-dom";

let Home = React.lazy(() => import("../pages/home/Home"));
export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
