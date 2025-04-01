import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProjectPage = () => {
  const { id } = useParams(); // Lấy ID dự án từ URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    detailImages: "",
    detailProjectName: "",
    year: "",
    address: "",
    siteArea: "",
    floorArea: "",
    clientName: "",
    photographerName: "",
    projectDescription: "",
    projectDescriptionEn: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API để lấy thông tin dự án
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/detail_project/${id}`);
        if (!response.ok) {
          throw new Error("Không thể lấy thông tin dự án");
        }
        const data_array = await response.json();
        const data = data_array[0]; // Lấy object đầu tiên trong mảng

        setFormData((prevFormData) => ({
          ...prevFormData,
          projectName: data.name_project || "",
          detailImages: data.detailImages ? data.detailImages.join(", ") : "",
          detailProjectName: data.name_project || "",
          year: data.year || "",
          address: data.location || "",
          siteArea: data.site_area || "",
          floorArea: data.floor_area || "",
          clientName: data.client || "",
          photographerName: data.photographer || "",
          projectDescription: data.text_vn || "",
          projectDescriptionEn: data.text_english || "",
        }));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchProjectBasicInfo = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/project/${id}`);
        if (!response.ok) {
          throw new Error("Không thể lấy thông tin cơ bản của dự án");
        }
        const data_array = await response.json();
        const data = data_array.data;

        setFormData((prevFormData) => ({
          ...prevFormData,
          projectName: data.name || prevFormData.projectName,
          coverImage: data.image_poster || "",
        }));
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchProjectImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects/img/${id}`);
        if (!response.ok) {
          throw new Error("Không thể lấy ảnh chi tiết dự án");
        }
        const data = await response.json();
        console.log(data);

        setFormData((prevFormData) => ({
          ...prevFormData,
          detailImages: data ? data.join(", ") : prevFormData.detailImages,
        }));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProjectDetails();
    fetchProjectBasicInfo();
    fetchProjectImages();
  }, [id]);

    //console.log("Form data:", formData); // Kiểm tra dữ liệu formData

  // Hàm xử lý khi người dùng chỉnh sửa dữ liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý khi gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chuyển detailImages từ chuỗi thành mảng
      const dataToSend = {
        ...formData,
        detailImages: formData.detailImages.split(",").map((img) => img.trim()),
      };

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/crud_project/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Không thể cập nhật fdafasdfasdfdự án");
      }

      const result = await response.json();
      setResponseMessage(result.message);
      alert("Cập nhật dự án thành công!");
      navigate("/admin/dashboard"); // Quay lại trang danh sách dự án
    } catch (error) {
      alert(`Đã xảy ra lỗi: ${error.message}`);
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
      <h1>Chỉnh sửa dự án</h1>

      {/* Form chỉnh sửa dự án */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">
            Link ảnh bìa:
          </label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            className="form-control"
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="Nhập link ảnh bìa"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Tên dự án:
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="form-control"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Nhập tên dự án"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="detailImages" className="form-label">
            Link ảnh chi tiết (tối đa 4, cách nhau bằng dấu phẩy):
          </label>
          <input
            type="text"
            id="detailImages"
            name="detailImages"
            className="form-control"
            value={formData.detailImages}
            onChange={handleChange}
            placeholder="Nhập link ảnh chi tiết"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="detailProjectName" className="form-label">
            Tên dự án trong detail:
          </label>
          <input
            type="text"
            id="detailProjectName"
            name="detailProjectName"
            className="form-control"
            value={formData.detailProjectName}
            onChange={handleChange}
            placeholder="Nhập tên dự án trong detail"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Năm:
          </label>
          <input
            type="number"
            id="year"
            name="year"
            className="form-control"
            value={formData.year}
            onChange={handleChange}
            placeholder="Nhập năm"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Địa chỉ:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="siteArea" className="form-label">
            Site Area:
          </label>
          <input
            type="text"
            id="siteArea"
            name="siteArea"
            className="form-control"
            value={formData.siteArea}
            onChange={handleChange}
            placeholder="Nhập site area"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="floorArea" className="form-label">
            Floor Area:
          </label>
          <input
            type="text"
            id="floorArea"
            name="floorArea"
            className="form-control"
            value={formData.floorArea}
            onChange={handleChange}
            placeholder="Nhập floor area"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">
            Tên khách hàng:
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            className="form-control"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Nhập tên khách hàng"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="photographerName" className="form-label">
            Tên người chụp ảnh:
          </label>
          <input
            type="text"
            id="photographerName"
            name="photographerName"
            className="form-control"
            value={formData.photographerName}
            onChange={handleChange}
            placeholder="Nhập tên người chụp ảnh"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="projectDescription" className="form-label">
            Mô tả chi tiết dự án:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            className="form-control"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Nhập mô tả chi tiết dự án"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="projectDescriptionEn" className="form-label">
            Mô tả chi tiết dự án (Tiếng Anh):
          </label>
          <textarea
            id="projectDescriptionEn"
            name="projectDescriptionEn"
            className="form-control"
            value={formData.projectDescriptionEn}
            onChange={handleChange}
            placeholder="Nhập mô tả chi tiết dự án bằng tiếng Anh"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Lưu thay đổi
        </button>
      </form>
      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </div>
  );
};

export default EditProjectPage;