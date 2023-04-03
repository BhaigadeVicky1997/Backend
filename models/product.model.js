const mongoose = require('mongoose');


const schema = mongoose.Schema;


const product = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productname: {
        type: String,
        required: true,
        maxLength: 20
    },
    productiamge: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        requird: true
    }
})


const Product = mongoose.model('product', product);
module.exports = Product;


