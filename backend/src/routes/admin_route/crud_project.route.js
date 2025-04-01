const express = require('express');
const router = express.Router();
const crud_project = require('../../controllers/controllers_admin/crud_project.controller.js');

router.post('/add', crud_project.create_project); // Thêm dự án mới
router.delete('/delete/:id', crud_project.delete_project);
router.put('/update/:id', crud_project.update_project);

module.exports = router;
