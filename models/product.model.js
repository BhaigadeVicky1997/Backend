const mongoose = require('mongoose');

const schema = mongoose.Schema();

const product = new schema({
    productname:{
        type:String,
        required:true,
        maxLength:20
    },
    productiamge:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        requird:truen  
    }
})


const Product = mongoose.model('product',product);
module.exports = Product;


