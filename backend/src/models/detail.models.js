// src/models/productModel.js
const pool = require("../config/db"); // Kết nối DB

const getImg = async (id) => {
  try {
    // Thực hiện truy vấn với điều kiện WHERE id_project = id
    const result = await pool.query('SELECT * FROM public.project_image WHERE id_project = $1', [id]);
    return result.rows; // Trả về danh sách ảnh cho id_project cụ thể
  } catch (error) {
    throw error; // Ném lỗi nếu có lỗi trong quá trình truy vấn
  }
};

module.exports = { getImg };
