const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');

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

// Mount Routes

// New Route
app.get('/books/new', (req,res) => {
    res.render('new.ejs')
})

// Create Route
app.post("/books", (req, res) => {
    if (req.body.completed === "on") {
        //if checked, req.body.completed is set to 'on'
        req.body.completed = true
    } else {
        //if not checked, req.body.completed is undefined
        req.body.completed = false
    }

    Book.create(req.body, (error, createdBook) => {
        res.redirect('/books')
    })

})

// Index Route
app.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        res.render('index.ejs', {books})
    })
})

app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('show.ejs', {foundBook})
    })
})

// Tell the app to listen
const PORT = process.env.PORT

app.listen(PORT, () => console.log('App is listening on Port ' + PORT))