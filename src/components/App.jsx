// src/components/App.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage/LandingPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
