import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../component/user/home/home"; // Trang chủ
import ProjectsPage from "../component/user/projects/projects"; // Trang dự án

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectsPage />} />
    </Routes>
  );
};

export default AppRoutes;
