import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../component/user/home/home"; 
import ProjectsPage from "../component/user/projects/projects";
import Detail from "../component/user/detail_project/detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;
