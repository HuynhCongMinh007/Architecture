import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../component/admin/dashboard/AdminDashboard";
import EditProjectPage from "../component/admin/edit/EditProjectPage";
import AdminSettings from "../component/admin/settings/AdminSettings"; // Trang cài đặt admin
import AdminLayout from "../component/admin/layout/AdminLayout"; // Layout admin
import AddProject from "../component/admin/add_project/add"; // Component thêm dự án

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/edit/:id" element={<EditProjectPage />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/add_project" element={<AddProject />} /> {/* Thêm route mới */}
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;