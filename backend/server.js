const dotenv = require('dotenv');
const app = require('./app'); // Import app.js
const pool = require('./src/config/db'); // Kết nối PostgreSQL

dotenv.config(); // Load biến môi trường

// Kiểm tra kết nối PostgreSQL
pool.connect()
    .then(() => console.log("✅ Kết nối Database thành công!"))
    .catch(err => console.error("❌ Lỗi kết nối Database:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy trên cổng http://localhost:${PORT}`);
});
