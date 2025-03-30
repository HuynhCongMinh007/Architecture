const express = require('express');
const router = express.Router();

const update_logo = require('./update_logo.route.js'); 
 

// Sử dụng routes
router.use('/update_logo', update_logo);


module.exports = router;
