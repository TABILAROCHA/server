const express = require('express');
const bobyparser = require('boby-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const department_controller = require('./department_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);

mongoose.connect(
    'mongodb://localhost:27017/http_app', 
    {useNewUrlParser: true});

app.use('/departments', department_controller);
//app.use('/products', product_controller);

app.listen(3000);