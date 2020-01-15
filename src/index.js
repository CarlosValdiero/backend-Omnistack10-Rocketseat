const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const routes = require('./routes');

app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(routes);


app.listen(3333);