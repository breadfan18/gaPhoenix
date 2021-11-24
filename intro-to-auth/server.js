const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const morgan = require('morgan');
const usersController = require('./controllers/index');

// initialize app
const app = express();

// Configure settings
require('dotenv').config();
const { DATABASE_URL, PORT } = process.env;


// Connect to and configure mongoDB with mongoose
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

// setup mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('Mongo error: ' + err.message));


// Mount middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/', usersController);


// Mount Routes

// Tell the app to listen
app.listen(PORT, () => console.log('App is listening on Port ' + PORT))


// Test