const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects.controller'); // Import controller
const detail = require('../controllers/detailProject.controller'); // Import controller

// Định nghĩa routes và gọi controller
router.get('/', projects.getProjects);
router.get('/img/:id', detail.img);

module.exports = router;
