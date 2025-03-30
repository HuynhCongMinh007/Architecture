// src/models/productModel.js
const pool = require('../../config/db'); // Kết nối DB

// Hàm lấy logo
const getLogo = async () => {
    try {
        const result = await pool.query('SELECT * FROM public.app_logo WHERE id = 1'); 
        return result.rows.map((row) => row.link); // Chỉ lấy giá trị URL
    } catch (error) {
        throw error;
    }
};

// Hàm cập nhật logo
const updateLogo = async (link) => {
    try {
        const query = 'UPDATE public.app_logo SET link = $1 WHERE id = 1';
        const values = [link];
        await pool.query(query, values);
        return { success: true, message: "Cập nhật logo thành công!" };
    } catch (error) {
        throw error;
    }
};

module.exports = { getLogo, updateLogo };
