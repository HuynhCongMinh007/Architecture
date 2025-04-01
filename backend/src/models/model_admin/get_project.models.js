const pool = require("../../config/db"); // Import kết nối cơ sở dữ liệu

const get_project_model = {
  get_project: async (id_project) => {
    try {
      const query = `
        SELECT id, name, image_poster
        FROM project
        WHERE id = $1;
      `;
      const values = [id_project];
      const result = await pool.query(query, values);

      // Kiểm tra nếu không tìm thấy dự án
      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0]; // Trả về thông tin dự án
    } catch (error) {
      console.error("Lỗi khi lấy thông tin dự án:", error);
      throw error;
    }
  },
};

module.exports = get_project_model;