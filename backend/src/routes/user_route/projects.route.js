const express = require('express');
const router = express.Router();
const projects = require('../../controllers/controllers_user/projects.controller'); // Import controller
const detail = require('../../controllers/controllers_user/detailProject.controller'); // Import controller

// Định nghĩa routes và gọi controller
router.get('/', projects.getProjects);
router.get('/img/:id', detail.img);

module.exports = router;
