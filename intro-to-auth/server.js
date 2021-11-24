const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

// Mongodb event listeners
db.on('connected', () => console.log('Connected to Mongo DB'))
db.on('error', (err) => console.log('Mongo Error' + err))


// Listener
app.listen(port, () => console.log('Listening'));
