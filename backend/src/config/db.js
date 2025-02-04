const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
        rejectUnauthorized: false, // Nếu cần SSL khi kết nối
    },
});

pool.connect()
    .then(() => console.log("✅ Kết nối Database Archirecture thành công!"))
    .catch(err => console.error("❌ Lỗi kết nối Database Archirecture:", err));

module.exports = pool;
