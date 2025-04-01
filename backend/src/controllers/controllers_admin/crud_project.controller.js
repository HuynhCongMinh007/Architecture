const crud_project_model = require("../../models/model_admin/crud_project.models.js");

const crud_project_controller = {
  create_project: async (req, res) => {
    try {
      const {
        coverImage, // Link ảnh bìa cho dự án
        projectName, // Tên dự án
        detailImages, // Danh sách URL hình ảnh cách nhau bằng dấu ","
        detailProjectName, // Tên dự án trong detail
        year, // Năm
        address, // Địa chỉ
        siteArea, // Site area
        floorArea, // Floor area
        clientName, // Tên khách hàng
        photographerName, // Tên người chụp ảnh
        projectDescription, // Mô tả chi tiết dự án
        projectDescriptionEn, // Mô tả chi tiết dự án bằng tiếng Anh
      } = req.body;

      // Kiểm tra dữ liệu đầu vào
      if (!coverImage || !projectName || !detailImages) {
        return res.status(400).json({
          message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
          status: "error",
        });
      }

      // Gọi hàm thêm dự án mới từ model
      const result_add_project = await crud_project_model.add_project(
        coverImage,
        projectName
      );

      if (!result_add_project.success) {
        return res.status(500).json({
          message: "Thêm dự án thất bại!",
          status: "error",
        });
      }

      const projectId = result_add_project.projectId;

      // Tách danh sách URL hình ảnh thành mảng
      const imageUrls = detailImages;

      // Gọi hàm add_image_project cho từng URL
      for (const url of imageUrls) {
        const result_add_image = await crud_project_model.add_image_project(
          projectId,
          url
        );

        if (!result_add_image.success) {
          return res.status(500).json({
            message: `Thêm hình ảnh thất bại cho URL: ${url}`,
            status: "error",
          });
        }
      }

      const result = await crud_project_model.add_detail_project(
        projectId,
        detailProjectName,
        projectDescriptionEn,
        projectDescription,
        year,
        address,
        siteArea,
        floorArea,
        clientName,
        photographerName
      );
      if(result.success === false) {
        return res.status(500).json({
          message: "Thêm thông tin chi tiết dự án thất bại!",
          status: "error",
        });
      }
      // Trả về phản hồi thành công
      return res.status(201).json({
        message: "Thêm dự án và hình ảnh thành công!",
        status: "success",
        projectId,
      });
    } catch (error) {
      console.error("Lỗi khi thêm dự án:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi khi thêm dự án.",
        status: "error",
      });
    }
  },
  delete_project: async (req, res) => {
    try {
      const { id } = req.params; // Lấy id từ URL

      // Kiểm tra nếu id không được cung cấp
      if (!id) {
        return res.status(400).json({
          message: "ID dự án không được cung cấp.",
          status: "error",
        });
      }

      // Gọi hàm xóa dự án từ model
      const result_delete_project = await crud_project_model.delete_project(id);

      // Kiểm tra kết quả trả về từ model
      if (!result_delete_project.success) {
        return res.status(500).json({
          message: "Xóa dự án thất bại!",
          status: "error",
        });
      }

      // Trả về phản hồi thành công
      return res.status(200).json({
        message: "Xóa dự án thành công!",
        status: "success",
      });
    } catch (error) {
      console.error("Lỗi khi xóa dự án:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi khi xóa dự án.",
        status: "error",
      });
    }
  },
  update_project: async (req, res) => {
    try {
      const { id } = req.params; // Lấy id từ URL
      console.log(id);
      // Gọi hàm xóa dự án từ model
      const result_delete_project = await crud_project_model.delete_project(id);

      if (!result_delete_project.success) {
        return res.status(500).json({
          message: "Xóa dự án thất bại!",
          status: "error",
        });
      }

      // Gọi hàm thêm dự án từ controller
      await crud_project_controller.create_project(req, res);
    } catch (error) {
      console.error("Lỗi khi cập nhật dự án:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi khi cập nhật dự án.",
        status: "error",
      });
    }
  },
};

module.exports = crud_project_controller;
