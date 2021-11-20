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

// Seed route
app.get('/books/seed', async (req, res) => {
    const data = [
        {
            title: 'Cristiano, why did i come back, Ronaldo',
            author: 'Ruben Mendes'
        },
        {
            title: 'Robin - Oh Van, where are you?',
            author: 'David Moyes'
        },
        {
            title: 'David Beckham - a lost handsome boy',
            author: 'Ole Goner'
        },
        {
            title: 'Wayne Rooney - Gone and Forgotten',
            author: 'Louie Van Dhaal'
        },
        {
            title: 'David De Gea - Life in the dumps',
            author: 'Jose'
        },
    ]
    await Book.deleteMany({}) //deleted everything in the database
    await Book.create(data); //created new data from the seed data above. 
    res.redirect('/books')
})

// New Route
app.get('/books/new', (req, res) => {
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
        res.render('index.ejs', { books })
    })
})

// Edit route
app.get('/books/:id/edit', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        res.render('edit.ejs', {book})
    })
})

// Update route
app.put('/books/:id', (req, res) => {
    req.body.completed = !!req.body.completed //!!'on' === true  || !!undefined === false
    Book.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true } /*  <-- this is an options object. */ , 
        (err, updatedBook) => {
            res.redirect(`/books/`)
    })
    

})

// Show route
app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('show.ejs', { foundBook })
    })
})

// Delete route
app.delete("/books/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/books")
    })
})
// Tell the app to listen
const PORT = process.env.PORT

app.listen(PORT, () => console.log('App is listening on Port ' + PORT))