const express = require('express');
const morgan  = require('morgan');
const createError = require('http-errors');
var bodyParser = require('body-parser')

const user_router = require('./routes/user_router');
const about_router = require('./routes/aboutus.router');
const router = require('./routes/contact.router');
const productRouter = require('./routes/product.router');
const cartRouter = require('./routes/cart.router');
require('dotenv').config();
require('./helper/init_mongoose');
const app = express();
app.use('/uploads', express.static('./uploads'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false,limit:'100mb' }))
// parse application/json
app.use(express.json({limit:'100mb'}))

app.use("/",user_router);
app.use("/",about_router);
app.use("/",router);
app.use("/",productRouter)
app.use("/",cartRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`${PORT} is running!`);
}) 