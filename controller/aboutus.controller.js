const express = require('express');
const router = express.Router();
const aboutusmodel = require('../models/aboutus.model');
const createError = require('http-errors');

const aboutus = async (req,res,next) =>{
   try {
    const data = await aboutusmodel.find();
    if(data) res.status(200).send({
        message:'Fetch data succesfully!',
        data:data,
        count:data.length
    })
   } catch (error) {
    next(error);
   }
}

const addaboutus = async (req,res,next)=>{
    try {
        const {title,content}  = req.body;
        const doesExists = await aboutusmodel.findOne({title:title});
        if(!doesExists) {
            const add =  new aboutusmodel({title,content});
            const data = await add.save();
            if(data) res.status(200).send({
                data:add,
                message:"Added Successfully!"
            })
        }
        else  throw createError.BadRequest();
    } catch (error) {
        next(error)
    }
}

module.exports = {aboutus,addaboutus}