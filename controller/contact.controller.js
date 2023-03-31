const Contact = require('../models/contactus.model');

const addContact = async (req,res,next) =>{
     try {
        const {email,message} = req.body;
        const passdata = await new Contact({email,message});
        passdata.save();
        res.status(200).send({
         message:"Contact Added!",
         data:passdata
        });
     } catch (error) {
        next(error);
     }
}

const fetchContact = async (req,res,next)=>{
    try {
        const data = await Contact.find();
        if(data) res.status(200).send({
            Message:'Contact Fetch!',
            Data:data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {addContact,fetchContact};