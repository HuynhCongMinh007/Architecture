import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../component/user/header/header";
import Footer from "../../component/user/footer/footer";
import AppRoutes from "../../route/route.user"; // File cấu hình routes cho user
import AdminRoutes from "../../route/route.admin"; // File cấu hình routes cho admin

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Routes dành cho user */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main>
                  <AppRoutes />
                </main>
                <Footer />
              </>
            }
          />

          {/* Routes dành cho admin */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
