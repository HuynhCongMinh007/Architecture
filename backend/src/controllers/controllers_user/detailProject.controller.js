const { getImg } = require("../../models/model_user/detail.models");

const detailController = {
  // Lấy thông tin ảnh của sản phẩm theo id
  img: async (req, res) => {
    const { id } = req.params; // Lấy tham số id từ URL
    try {
      // Giả sử getImg nhận id để lấy thông tin ảnh tương ứng
      const products = await getImg(id);
      console.log(products); // In ra sản phẩm để kiểm tra
      res.json(products); // Trả về kết quả cho client
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu ảnh:", error);
      res.status(500).json({ message: "Lỗi khi lấy dữ liệu ảnh." });
    }
  },
};

module.exports = detailController;
