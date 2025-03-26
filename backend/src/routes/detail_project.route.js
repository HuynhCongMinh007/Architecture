const express = require('express');
const router = express.Router();
const detailProjectController = require('../controllers/detail_project.controller'); // Import controller

// Định nghĩa routes và gọi controller
router.get('/:id', detailProjectController.inFor);

module.exports = router;
