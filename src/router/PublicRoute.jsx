import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Appointment from "../screens/Appointment";

const PublicRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Appointment />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PublicRoute;
