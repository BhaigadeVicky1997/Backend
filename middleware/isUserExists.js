const usermodel = require('../models/user.model');
const createError = require('http-errors');
const isUserExists  = async (id) =>{
    if(id){
       const userexists = await usermodel.findOne({_id:id});
       if(userexists) next();
    }
    else throw createError(404,'User Not Found!');
}



// This middleware checks if the user exists
const checkUserExists = (req, res, next) => {
    const userId = req.body.userId; // assuming the user ID is in the URL parameters
    
    // Check if the user exists in the database
    if (isUserExists(userId)) {
      next(); // User exists, continue to the next middleware
    } else {
      res.status(404).send('User not found');
    }
  };

  module.exports = {isUserExists,checkUserExists};