// require dependencies
const express = require('express');
const booksRouter = express.Router();


// create a router object
const Book = require('../models/book');

// list our router actions 
// Seed route
booksRouter.get('/books/seed', async (req, res) => {
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
booksRouter.get('/books/new', (req, res) => {
    res.render('new.ejs')
})

// Create Route
booksRouter.post("/books", (req, res) => {
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
booksRouter.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        res.render('index.ejs', { books })
    })
})

// Edit route
booksRouter.get('/books/:id/edit', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        res.render('edit.ejs', {book})
    })
})

// Update route
booksRouter.put('/books/:id', (req, res) => {
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
booksRouter.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('show.ejs', { foundBook })
    })
})

// Delete route
booksRouter.delete("/books/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/books")
    })
})
// export the router object so that we require it in server.js
module.exports = booksRouter;