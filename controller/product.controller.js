const productmodel = require('../models/product.model');
const createError = require('http-errors');
const usermodel = require('../models/user.model');
const  upload = require('./fileuploader');
const multer = upload.single('productiamge');

const addproduct = async(req,res,next) =>{
  try {
  const {productname,cost,userId} = req.body;
  console.log(productname,cost,userId);
  if(!productname || !cost || !userId) throw createError(400,'Bad Request.')  
  else{
    const add = new productmodel({
      productname,cost,userId,productiamge:req.file.path
    })  
    const data = await add.save();
    if(data) res.status(200).send({
      message:'Product Added.'
    })
  }     
  
  } catch (error) {
    next(error);
  }
}

const getProducts = async(req,res,next) => {
  const userdata = null;
   try {
    const data = await productmodel.find().populate();
  
    if(data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(object, key)) {
        userdata   =  await usermodel.findById(object[key].userId.toString())
      }
      console.log(userdata)
    }
   
    console.log(userdata)
      res.status(200).send({
        Message:'Products Fetch!',
        Data : data
     })
    }
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