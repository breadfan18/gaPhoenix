const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override")
const booksController = require('./controllers/books');

// initialize app
const app = express();

// Configure settings
require('dotenv').config();


// Connect to and configure mongoDB with mongoose
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

// setup mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('Mongo error: ' + err.message));


// Mount middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/', booksController)


// Mount Routes

// Tell the app to listen
const PORT = process.env.PORT

app.listen(PORT, () => console.log('App is listening on Port ' + PORT))