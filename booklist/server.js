const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const methodOverride = require("method-override")

// initialize app
const app = express();

// Configure settings
require('dotenv').config();


// Connect to and configure mongoDB with mongoose
mongoose.connect(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

// setup mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('Mongo error: ' + err.message));


// Mount middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));


// Mount Routes

// Tell the app to listen
const PORT = process.env.PORT

app.listen(PORT, () => console.log('App is listening on Port ' + PORT))