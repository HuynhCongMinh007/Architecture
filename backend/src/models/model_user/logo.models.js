// src/models/productModel.js
const pool = require('../../config/db'); // Kết nối DB

const getLogo = async () => {
    try {
        const result = await pool.query('SELECT * FROM public.app_logo WHERE id = 1'); 
        return result.rows.map((row) => row.link); // Chỉ lấy giá trị URL
    } catch (error) {
        throw error;
    }
};

module.exports = { getLogo };
