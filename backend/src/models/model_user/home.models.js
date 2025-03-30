// src/models/productModel.js
const pool = require('../../config/db'); // Kết nối DB

const getHome = async () => {
    try {
        const result = await pool.query('SELECT * FROM public.poster');
        return result.rows.map((row) => row.url); // Chỉ lấy giá trị URL
    } catch (error) {
        throw error;
    }
};

module.exports = { getHome };
