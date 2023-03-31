const productmodel = require('../models/product.model');
const createError = require('http-errors');

const  upload = require('./fileuploader');
const multer = upload.single('productiamge');

const addproduct = async(req,res,next) =>{
  try {
  const {productname,cost} = req.body;
  if(!productname || !cost) throw createError(400,'Bad Request.')       
  const add = new productmodel({
    productname,cost,productiamge:req.file.path
  })  
  const data = await add.save();
  if(data) res.status(200).send({
    message:'Product Added.'
  })
  } catch (error) {
    next(error);
  }
}

const getProducts = async(req,res,next) => {
   try {
    const data = await productmodel.find().sort({ field: 'desc' });
    if(data) res.status(200).send({
       Message:'Products Fetch!',
       Data : data
    })
    else throw createError(400,"Bad request")
   } catch (error) {
    next(error);
   }
}

const getparticularProduct = async(req,res,next) =>{
  const {id} = req.params;
  console.log(id);
  try {
     const data = await productmodel.findById(id);
     if(data) res.status(200).send({
      Message:'Products Fetch!',
      Data : data
   })
   else throw createError(400,"Bad request")
   } catch (error) {
    next(error);
   }
}
module.exports = {addproduct,multer,getProducts,getparticularProduct};