const express = require('express');
const { addproduct,multer,getProducts,getparticularProduct } = require('../controller/product.controller');
const router = express.Router();

router.post('/product',multer,addproduct);
router.get('/allproduct',getProducts);
router.get('/getproduct/:id',getparticularProduct)

module.exports = router;