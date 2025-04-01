import React, { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    coverImage: "",
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

  // Hàm xử lý khi người dùng nhập dữ liệu
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

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/crud_project/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      setResponseMessage("Đã xảy ra lỗi khi gửi yêu cầu.");
    }
  };

  return (
    <div className="container my-5">
      <h1>Thêm dự án mới</h1>
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
          Gửi
        </button>
      </form>
      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </div>
  );
};

export default AddProject;