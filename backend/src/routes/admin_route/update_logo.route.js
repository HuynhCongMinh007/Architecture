const express = require('express');
const router = express.Router();
const update_logo_controller = require('../../controllers/controllers_admin/update_logo.controller.js');

router.put('/', update_logo_controller.update_logo);

module.exports = router;
