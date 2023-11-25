import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import BloodDonation from "../screens/BloodDonation";
import Login from "../screens/Login";

const PublicRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DonacionSangre' element={<BloodDonation />} />
        <Route path='/InicioSesion' element={<Login />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PublicRoute;
