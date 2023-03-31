const mongoose = require('mongoose');
const schema = mongoose.Schema;

const aboutusSchema = new schema({
title:{
    type:String,
    required:true,
    maxLength:20
},
content:{
    type:String,
    required:true,
    maxLength:100
}
});

const About = mongoose.model('about',aboutusSchema);
module.exports = About;
