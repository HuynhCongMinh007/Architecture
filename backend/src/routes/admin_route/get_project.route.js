const express = require('express');
const router = express.Router();
const get_project = require('../../controllers/controllers_admin/get_project.controller.js');


router.get('/:id', get_project.get_project); // Xóa dự án theo ID

module.exports = router;
