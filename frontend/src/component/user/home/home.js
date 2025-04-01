import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import useBackgroundRotation from "./userBackgroundRotation";

function Home() {
  const { backgroundImage, opacity } = useBackgroundRotation();

  return (
    <div
      className="cloudinary-image-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        opacity: opacity,
        transition: "opacity 1s ease-in-out", // Thêm transition để làm mượt mà hiệu ứng opacity
      }}
    >
      <Link to="/projects" className="project-title">
        Project
      </Link>
    </div>
  );
}

export default Home;
