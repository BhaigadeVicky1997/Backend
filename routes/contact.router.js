const express = require('express');
const contactrouter = express.Router();
const {addContact,fetchContact} = require('../controller/contact.controller');

contactrouter.post('/contact',addContact);
contactrouter.get('/fetchcontact',fetchContact)

module.exports = contactrouter;