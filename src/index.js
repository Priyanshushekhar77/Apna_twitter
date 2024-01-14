const express = require('express');
const dotenv=  require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const{PORT} = require('./config/serverConfig');

// dbconnection 
const connect = require("./config/database");
connect();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(PORT, async () => {
    console.log(`server started at port:${PORT}`);
});