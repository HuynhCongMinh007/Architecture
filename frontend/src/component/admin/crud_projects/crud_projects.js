import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API để lấy danh sách dự án
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects`); // Địa chỉ API của bạn
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu dự án");
        }
        const data = await response.json();
        setProjects(data); // Cập nhật danh sách dự án
      } catch (error) {
        setError(error.message); // Xử lý lỗi
      } finally {
        setLoading(false); // Đánh dấu đã hoàn thành việc gọi API
      }
    };

    fetchProjects();
  }, []); // Chỉ gọi API khi component được mount

  if (loading) {
    return <div>Đang tải dữ liệu...</div>; // Hiển thị thông báo khi đang tải
  }

  if (error) {
    return <div>Đã xảy ra lỗi: {error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <Link to="/" className="btn btn-secondary mb-4">
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
      </div>

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
