const { getProject } = require("../models/project.models");

const projects = {
  // Lấy danh sách sản phẩm
  getProjects: async (req, res) => {
    const products = await getProject();
    console.log(products);
    res.json(products);
  },
};

module.exports = projects;
