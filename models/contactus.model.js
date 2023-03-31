const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactus = new schema({
    email:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,
        maxLength:100
    }
})

const Contact = mongoose.model('contact',contactus);
module.exports = Contact;

