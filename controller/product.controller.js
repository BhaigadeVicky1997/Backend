const productmodel = require('../models/product.model');

const addproduct = async(req,res,next) =>{
  try {
    const {productname,cost} = req.body;
    
  } catch (error) {
    next(error);
  }
}