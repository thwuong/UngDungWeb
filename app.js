const express = require('express');
const cors = require('cors');
const setupContactRoutes = require('./app/routes/contact.routes')

const {BadRequestError, errorhandler} = require('./app/errors')
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json( {message : 'Welcome to contact book application'});
})

setupContactRoutes(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"))
})

app.use((req, res, next) => {
    next.errorhandler(error,res);
})

module.exports = app;