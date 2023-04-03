const User = require('../models/user.model');

const checkUserExists = async (req, res, next) => {
  const emailId = req.body.email; 
  const data = await User.findOne({email:emailId})
  try {
    if(data){
      req.emailId = data;
      console.log(data)
      next();
    } else{
      next();
    }
  } catch (error) {
    next(error)
  }
}

module.exports = checkUserExists;
