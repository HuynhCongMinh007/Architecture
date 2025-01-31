import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../component/user/header/header";
import Footer from "../../component/user/footer/footer";
// import AboutUs from "../../component/user/about-us/about_us";
// import Home from "../../component/user/home/home";
import AppRoutes from "../../route/route.use"; // File cấu hình routes

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <main>
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
