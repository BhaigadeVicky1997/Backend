const express = require('express');
const router = express.Router();
const {aboutus,addaboutus} = require('../controller/aboutus.controller');

router.get('/aboutus',aboutus);
router.post('/addaboutus',addaboutus)

module.exports = router;