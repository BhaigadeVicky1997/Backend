const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/', {
    dbName:"Eshop",
   useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log('Connection established!');
}).catch(err => console.log(err.message));

mongoose.connection.on('connected!',()=>{
    console.log('Mongoose connected to db!');
})

mongoose.connection.on('error!',()=>{
    console.log(err.message)
})

mongoose.connection.on('disconnect!',()=>{
    console.log('Mongoose connection is disconnected!');
})

process.on('SIGINT',async()=>{
 await mongoose.connection.close();
 process.exit(0);
})