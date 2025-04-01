import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmPopup from "./ConfirmPopup"; // Import component popup

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logoLink, setLogoLink] = useState(""); // State để lưu link logo
  const [responseMessage, setResponseMessage] = useState(""); // State để lưu phản hồi từ server
  const [showPopup, setShowPopup] = useState(false); // State để hiển thị popup
  const [selectedProjectId, setSelectedProjectId] = useState(null); // Lưu ID dự án cần xóa
  const navigate = useNavigate(); // Hook để điều hướng

  // Gọi API để lấy danh sách dự án
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects`);
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu dự án");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Hàm xử lý xóa dự án
  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/crud_project/delete/${selectedProjectId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Không thể xóa dự án");
      }

      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProjectId));
      toast.success("Xóa dự án thành công!");
    } catch (error) {
      toast.error(`Đã xảy ra lỗi: ${error.message}`);
    } finally {
      setShowPopup(false); // Đóng popup sau khi xử lý
    }
  };

  // Hàm mở popup
  const openPopup = (projectId) => {
    setSelectedProjectId(projectId);
    setShowPopup(true);
  };

  // Hàm đóng popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedProjectId(null);
  };

  // Hàm xử lý cập nhật logo
  const handleUpdateLogo = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/update_logo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link: logoLink }),
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      setResponseMessage("Đã xảy ra lỗi khi gửi yêu cầu.");
    }
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div className="container my-5">
      <h1>Quản lý dự án</h1>

      {/* Form cập nhật logo */}
      <div className="mb-4">
        <h2>Cập nhật logo</h2>
        <form onSubmit={handleUpdateLogo}>
          <div className="mb-3">
            <label htmlFor="logoLink" className="form-label">
              Nhập link logo:
            </label>
            <input
              type="text"
              id="logoLink"
              className="form-control"
              value={logoLink}
              onChange={(e) => setLogoLink(e.target.value)}
              placeholder="Nhập link logo..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Gửi
          </button>
        </form>
        {responseMessage && <p className="mt-3">{responseMessage}</p>}
      </div>

      {/* Nút thêm dự án */}
      <div className="mb-4">
        <button
          className="btn btn-success"
          onClick={() => navigate("/admin/add_project")} // Điều hướng đến trang thêm dự án
        >
          Thêm dự án
        </button>
      </div>

      {/* Danh sách dự án */}
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <Link to={`/detail/${project.id}`}>
                <img
                  src={project.image_poster}
                  alt={project.name}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link to={`/admin/edit/${project.id}`} className="btn btn-primary w-50 me-2">
                    Sửa
                  </Link>
                  <button
                    className="btn btn-danger w-50"
                    onClick={() => openPopup(project.id)} // Mở popup khi nhấn nút xóa
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị popup */}
      {showPopup && (
        <ConfirmPopup
          message="Bạn có chắc chắn muốn xóa dự án này?"
          onConfirm={handleDelete} // Gọi hàm xóa khi xác nhận
          onCancel={closePopup} // Đóng popup khi hủy
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default ProjectsPage;
