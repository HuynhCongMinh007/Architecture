const { getHome } = require("../../models/model_user/home.models");

const home = {
  // Lấy danh sách sản phẩm
  getHome: async (req, res) => {
    const products = await getHome();
    console.log(products);
    res.json(products);
  },
};

module.exports = home;
