reject
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())

let port = process.env.PORT || 3000

//import Routes
const articleRoute = require('./routes/Articles')
const password = "questa"
app.use(`/${password}/article`, articleRoute);

try{
    mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
}
catch(err){
    console.log("could not connect to database, response error: ", err)
}

app.listen(port);
