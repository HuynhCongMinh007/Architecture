const { updateLogo } = require("../../models/model_admin/update_logo.models");

const update_logo_controller = {
  update_logo: async (req, res) => {
    try {
      const { link } = req.body;

      // Kiểm tra nếu link không tồn tại
      if (!link) {
        return res.status(400).json({ 
          message: "Link không được để trống", 
          status: "error" 
        });
      }

      // Gọi hàm updateLogo để cập nhật vào cơ sở dữ liệu
      const result = await updateLogo(link);

      // Kiểm tra kết quả trả về từ model
      if (!result.success) {
        return res.status(500).json({ 
          message: result.message || "Cập nhật thất bại", 
          status: "error" 
        });
      }

      // Trả về phản hồi thành công
      return res.status(200).json({ 
        message: "Cập nhật logo thành công!", 
        status: "success", 
        link 
      });

    } catch (error) {
      console.error("Lỗi khi cập nhật logo:", error);
      return res.status(500).json({ 
        message: "Đã xảy ra lỗi khi cập nhật logo", 
        status: "error" 
      });
    }
  },
};

module.exports = update_logo_controller;
