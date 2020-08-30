'use strict'
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routing = require('./routes');

require('dotenv').config();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routing);

 app.listen(process.env.APP_PORT, () => {
     console.log(`Server Berjalan di port ${process.env.APP_PORT}`)
 });