const express = require('express');
const router = express.Router();
const home = require('../../controllers/controllers_user/home.controller'); // Import controller

// Định nghĩa routes và gọi controller
router.get('/', home.getHome);

module.exports = router;
