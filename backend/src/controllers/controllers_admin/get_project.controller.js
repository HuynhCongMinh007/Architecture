const get_project_model = require("../../models/model_admin/get_project.models.js"); // Import model

const get_project_controller = {
  get_project: async (req, res) => {
    try {
      const { id } = req.params; // Lấy id từ URL

      // Kiểm tra nếu id không được cung cấp
      if (!id) {
        return res.status(400).json({
          message: "ID dự án không được cung cấp.",
          status: "error",
        });
      }

      // Gọi model để lấy thông tin dự án
      const project = await get_project_model.get_project(id);

      // Kiểm tra nếu không tìm thấy dự án
      if (!project) {
        return res.status(404).json({
          message: "Không tìm thấy dự án.",
          status: "error",
        });
      }

      // Trả về thông tin dự án
      return res.status(200).json({
        message: "Lấy thông tin dự án thành công.",
        status: "success",
        data: project,
      });
    } catch (error) {
      console.error("Lỗi khi lấy thông tin dự án:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi khi lấy thông tin dự án.",
        status: "error",
      });
    }
  },
};

module.exports = get_project_controller;