import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./detail.css";
import useBackgroundRotation from "./useBackgroundRotation";

function Home() {
  const { id } = useParams(); // Lấy id từ URL
  const { backgroundImage, opacity } = useBackgroundRotation();
  
  // State để lưu danh sách ảnh
  const [images, setImages] = useState([]);
  
  // State để lưu ảnh đã chọn
  const [selectedImage, setSelectedImage] = useState(null);

   // State để lưu thông tin chi tiết dự án
   const [projectDetail, setProjectDetail] = useState(null);

  // Lấy dữ liệu ảnh từ API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects/img/${id}`); // Thay API_URL bằng URL thật của API
        const data = await response.json(); // Giả sử API trả về một mảng ảnh
        setImages(data); // Cập nhật state với dữ liệu ảnh
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    
    fetchImages(); // Gọi API khi component mount
  }, [id]);

   // Lấy dữ liệu chi tiết dự án từ API /detail_project/:id
   useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/detail_project/${id}`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setProjectDetail(data[0]); // Lấy object đầu tiên trong mảng
        }

      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetail();
  }, [id]);


  return (
    <div>
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
          <div className="project-title">Project</div>
        </Link>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <h2>{projectDetail?.name_project || "Loading..."}</h2>
          <div>Year:  {projectDetail?.year || "..."}</div>
          <div>Location:{projectDetail?.location || "..."}</div>
          <div>Site area: {projectDetail?.site_area || "..."}</div>
          <div>Floor area: {projectDetail?.floor_area || "..."}</div>
          <div>Client: {projectDetail?.client || "..."}</div>
          <div>Photographer: {projectDetail?.photographer || "..."}</div>

          <h5 className="mt-5">Project gallery</h5>

          <div className="image-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="gallery-img"
                onClick={() => setSelectedImage(img)} // Sự kiện khi click
              />
            ))}
          </div>

          {/* Hiển thị popup nếu có ảnh được chọn */}
          {selectedImage && (
            <div className="image-popup" onClick={() => setSelectedImage(null)}>
              <div className="image-popup-content">
                <img src={selectedImage} alt="Selected" />
              </div>
            </div>
          )}
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <h4>{projectDetail?.name_project || "Project Details"}</h4>
          <p>
            {projectDetail?.text_english
              ? projectDetail.text_english.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : "Loading..."}
          </p>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <p>
            {projectDetail?.text_vn
              ? projectDetail.text_vn.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : "Đang tải..."}
          </p>
        </div>
      </div>

      <div className="text-center mt-5">facebook | instagram</div>
    </div>
  );
}

export default Home;
