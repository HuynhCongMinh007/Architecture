const express = require('express');
const router = express.Router();
const logo = require('../../controllers/controllers_user/logo.controller'); // Import controller

// Định nghĩa routes và gọi controller
router.get('/', logo.getLogo);

module.exports = router;
