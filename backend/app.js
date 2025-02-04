const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./src/routes/index');
// const adminRoutes = require('./src/routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Định nghĩa routes
app.use('/api', route);
// app.use('/api/admin', adminRoutes);

// Route kiểm tra API hoạt động
app.get('/', (req, res) => {
    res.send('Backend Node.js đang chạy...');
});

module.exports = app;
