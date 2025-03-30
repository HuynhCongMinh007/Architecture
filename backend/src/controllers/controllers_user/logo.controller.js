const { getLogo } = require("../../models/model_user/logo.models");

const logo = {
  // Lấy danh sách sản phẩm
  getLogo: async (req, res) => {
    const products = await getLogo();
    console.log(products);
    res.json(products);
  },
};

module.exports = logo;
