const { Router } = require("express");
const express = require("express");
const contacts = require('../controllers/contact.controller');


module.exports = (app) => {
    const router = express.Router();

    // [GET] /
    router.get('/', contacts.findAll)
    // [Post] /
    router.get('/', contacts.create)
    // [DELETE] /
    router.delete('/', contacts.deleteAll)
    // [GET] /favorite 
    router.get('/', contacts.findAllFavorite)
    // [GET] /:id
    router.get('/:id', contacts.findOne)
    // [PUT] /:id
    router.put('/:id', contacts.update)
    // [DELETE] /:id
    router.delete('/:id', contacts.delete)

    app.use('/api/contacts', router)

}