// src/models/productModel.js
const pool = require('../config/db'); // Kết nối DB

const getHome = async () => {
    try {
        const result = await pool.query('SELECT * FROM public.poster');
        return result.rows; // Trả về danh sách sản phẩm
    } catch (error) {
        throw error;
    }
};

module.exports = { getHome };
