const express = require("express");
const createError = require('http-errors');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {generateAccessToken} = require('../helper/token');

const upload = require('./fileuploader');
const uploadImg = upload.single('profilepic');


const fetchUser = async (req, res, next) => {
   
   const user = req.params.userId;
   console.log(user)
   console.log(user);
   try {
      const data = await User.find();
      if(data) throw createError(404,'No data') 
      res.status(200).json({
         data: data,
         message: 'Fetch Succesfully!'
      })
   } catch (error) {
      next(error)
   }
}

const registerUser = async (req, res, next) => {

   try {
      const { email, password, f_name, l_name } = req.body;
      console.log(email, password, f_name, l_name)
      if (!email || !password) throw createError.BadRequest();
      const doesExists = await User.findOne({ email: email });

      if (!doesExists) {
         const hashpassword = await bcrypt.hash(password,10);
               console.log(req.file);
              const  user = new User({email,f_name,l_name,password:hashpassword,profilepic:req.file.path})
              console.log(user);
               const data = await user.save();
               res.status(200).json({
                  message: 'User Registration Done!',
                  data: data
               });
      }
     else throw createError.Conflict(`${email} is already register with us.!`);
   } catch (error) {
      next(error);
   }
}


const login = async(req,res,next) =>{
   try {
     const {email,password} = req.body;
     const exists = await User.findOne({email:email});
     if(exists){
      const token = generateAccessToken('dfd');
      const comparepass = await bcrypt.compareSync(exists.password,password);
      if(comparepass){
         res.status(200).json({
            message: 'Login Successfully!',
            data: data,
            token:token
         });
      }  
     }
     else{
      throw createError.Conflict(`${email} is already exists!`);
     }
   } catch (error) {
      next(error)
   }
}

module.exports = { fetchUser, registerUser,login,uploadImg };