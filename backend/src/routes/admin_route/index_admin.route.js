const express = require('express');
const router = express.Router();

const update_logo = require('./update_logo.route.js'); 
const crud_project = require('./crud_project.route.js'); 
const get_project = require('./get_project.route.js'); 
 

// Sử dụng routes
router.use('/update_logo', update_logo);
router.use('/crud_project', crud_project);
router.use('/project', get_project);


module.exports = router;
