const express = require('express');
const router = express.Router();

const home = require('./home.route');
const projects = require('./projects.route');
const detail_projects = require('./detail_project.route');
const logo = require('./logo_app.route');
// Nếu không cần admin, có thể bỏ dòng này
//nst adminRoutes = require('./adminRoutes');

// Sử dụng routes
router.use('/home', home);
router.use('/projects', projects);
router.use('/detail_project', detail_projects);
router.use('/logo_app', logo);
//router.use('/admin', adminRoutes); // Nếu không cần thì có thể xóa

module.exports = router;
