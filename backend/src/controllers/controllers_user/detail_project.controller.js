const { getInfor } = require("../../models/model_user/detail_project.models");

const detailController = {
  // Lấy thông tin sản phẩm theo ID
  inFor: async (req, res) => {
    try {
      const { id } = req.params; // Lấy id từ URL
      if (!id) {
        return res.status(400).json({ message: "Thiếu ID sản phẩm." });
      }

      const information = await getInfor(id); // Truy vấn database
      if (!information) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm." });
      }

      console.log(information);
      res.json(information);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      res.status(500).json({ message: "Lỗi server." });
    }
  },
};

module.exports = detailController;
