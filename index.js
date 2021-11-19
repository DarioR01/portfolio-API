const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())

let port = process.env.PORT || 3000

//import Routes
const articleRoute = require('./routes/Articles')

app.use('/article', articleRoute);

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})

app.listen(port);