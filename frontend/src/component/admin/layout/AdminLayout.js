import React from "react";
import AdminHeader from "../header/AdminHeader"; // Header dành riêng cho admin
import AdminFooter from "../footer/AdminFooter"; // Footer dành riêng cho admin

function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;