const express = require('express');
const router = express.Router();
const {registerUser,fetchUser,login,uploadImg} = require('../controller/user.controller');
const checkUserExists = require('../middleware/isUserExists');

router.get("/user",fetchUser)
router.post("/register",uploadImg,checkUserExists,registerUser);
router.post("/login",login)

module.exports = router;