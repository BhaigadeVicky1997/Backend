const User = require('../models/user.model');

const checkUserExists = async (req, res, next) => {
  const emailId = req.body.email; // assuming the user ID is passed in the URL params
  User.findOne({email:emailId}).then(res=>{
    req.emailId = res;
    console.log(`hi i am middleware ${req.emailId.email}`)
    next();
  }).catch(err=>{
    return next(err);
  })

}

module.exports = checkUserExists;
