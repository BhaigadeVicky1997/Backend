const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cart = new schema({
   quantity:{
    type:Number
   }
})

const Cart = mongoose.model('cart',cart);
module.exports = Cart;

