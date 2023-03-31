const moongose = require('mongoose');
const schema = moongose.Schema
const bcrypt = require('bcrypt');
const Userschema = new schema({
    f_name:{
        type:String,
        required:true,
        maxLength:12
    },
    l_name:{
        type:String,
        required:true,
        maxLength:12
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        maxLength:100
    },
    profilepic:{
        type:String,
        
    }
})


const User = moongose.model('user',Userschema);
module.exports = User;

