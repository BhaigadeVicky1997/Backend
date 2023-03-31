const express = require('express');
const router = express.Router();
const {registerUser,fetchUser,login,uploadImg} = require('../controller/user.controller');

router.get("/user",fetchUser);
router.post("/register",uploadImg,registerUser);
router.post("/login",login)

module.exports = router;