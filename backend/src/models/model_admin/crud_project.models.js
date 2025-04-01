const pool = require("../../config/db"); // Kết nối tới cơ sở dữ liệu

const crud_project_model = {
  // Hàm thêm dự án mới
  add_project: async (coverImage, projectName) => {
    try {
      const query = `
        INSERT INTO project (image_poster, name)
        VALUES ($1, $2)
        RETURNING id; -- Trả về ID của dự án vừa được thêm
      `;
      const values = [coverImage, projectName];
      const result = await pool.query(query, values);

      return {
        success: true,
        message: "Thêm dự án thành công!",
        projectId: result.rows[0].id, // ID của dự án vừa được thêm
      };
    } catch (error) {
      console.error("Lỗi khi thêm dự án:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi khi thêm dự án.",
      };
    }
  },

  // Hàm thêm hình ảnh chi tiết cho dự án
  add_image_project: async (id_project, url) => {
    try {
      const query = `
        INSERT INTO project_image (id_project, url)
        VALUES ($1, $2)
        RETURNING id; -- Trả về ID của hình ảnh vừa được thêm
      `;
      const values = [id_project, url];
      const result = await pool.query(query, values);

      return {
        success: true,
        message: "Thêm hình ảnh thành công!",
        imageId: result.rows[0].id, // ID của hình ảnh vừa được thêm
      };
    } catch (error) {
      console.error("Lỗi khi thêm hình ảnh:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi khi thêm hình ảnh.",
      };
    }
  },
  // Hàm thêm chi tiết dự án
  add_detail_project: async (
    id_project,
    name_project,
    text_english,
    text_vn,
    year,
    location,
    site_area,
    floor_area,
    client,
    photographer
  ) => {
    try {
      const query = `
        INSERT INTO public.detail_project (
          id_project, 
          name_project, 
          text_english, 
          text_vn, 
          year, 
          location, 
          site_area, 
          floor_area, 
          client, 
          photographer
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING id; -- Trả về ID của chi tiết dự án vừa được thêm
      `;
      const values = [
        id_project,
        name_project,
        text_english,
        text_vn,
        year,
        location,
        site_area,
        floor_area,
        client,
        photographer,
      ];
      const result = await pool.query(query, values);

      return {
        success: true,
        message: "Thêm chi tiết dự án thành công!",
        detailProjectId: result.rows[0].id, // ID của chi tiết dự án vừa được thêm
      };
    } catch (error) {
      console.error("Lỗi khi thêm chi tiết dự án:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi khi thêm chi tiết dự án.",
      };
    }
  },

  // Hàm xóa dự án
  delete_project: async (id_project) => {
    try {
      const query = `
        DELETE FROM project
        WHERE id = $1; -- Xóa dự án dựa trên id_project
      `;
      const values = [id_project];
      const result = await pool.query(query, values);

      // Kiểm tra nếu không có dòng nào bị ảnh hưởng
      if (result.rowCount === 0) {
        return {
          success: false,
          message: "Không tìm thấy dự án để xóa.",
        };
      }

      return {
        success: true,
        message: "Xóa dự án thành công!",
      };
    } catch (error) {
      console.error("Lỗi khi xóa dự án:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi khi xóa dự án.",
      };
    }
  },
};

module.exports = crud_project_model;
