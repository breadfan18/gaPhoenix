// Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const seedData = require('./models/seed');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2;
const expressFileUpload = require('express-fileupload');
// Initialize Express App
const app = express();

// Configure App Settings
require('dotenv').config();
const { DATABASE_URL, PORT, API_KEY, API_SECRET, CLOUD_NAME } = process.env;
console.log(process.env)
// Configure Cloudinary

cloudinary.config({ 
   cloud_name: CLOUD_NAME, 
   api_key: API_KEY, 
   api_secret: API_SECRET 
});

// Connect to MongoDB
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

// Mount Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(expressFileUpload({ createParentPath: true }));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method')); // _method is a query param that accepts a value
// that value is the http method we want to change to

// Mount Routes

app.get('/books/seed', async (req, res) => {
    await Book.deleteMany({});
    await Book.create(seedData);
    res.redirect('/books');
});

// Index Route
app.get('/books', (req, res) => {
    //         👇 query object
    Book.find({}, (err, books) => {
        //  Model.find() returns all results in a JS Array
        //                                    👇
        res.render('index.ejs', { books }); // context object
    }) 
});


// New Route
app.get('/books/new', (req, res) => {
    res.render('new.ejs');
});

// Delete Route
app.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, deletedBook) => {
        // res.redirect('/books');
        res.json(deletedBook)
    });
});

// Update Route
app.put('/books/:id', (req, res) => {
    // this is known as type casting - cast one datatype into another
    req.body.completed = !!req.body.completed; 
    Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        res.redirect(`/books/${req.params.id}`);
    }); 
    // Book.findById(req.params.id, (err, book) => {
    //     book.imageURL = req.body.imageURL || book.imageURL
    //     book.title = req.body.title || book.title
    //     book.author = req.body.author || book.author
    //     book.save(() => {
    //         res.redirect(`/books/${req.params.id}`);
    //     })
    // })
}); 

// Create Route
app.post('/books', (req, res) => {
    req.body.completed = !!req.body.completed; // !!'on' -> true or !!undefined -> false
    const photo = req.files.coverImageURL;
    photo.mv(`./uploads/${photo.name}`);
    cloudinary.uploader.upload(`./uploads/${photo.name}`).then(result => {
        req.body.coverImageURL = result.secure_url;
        Book.create(req.body, (err, book) => {
            res.redirect('/books'); // tells the browser to make another GET request to /books
        });
    });
});

// Edit Route
app.get('/books/:id/edit', async (req, res) => {
    const book = await Book.findById(req.params.id); 
    res.render('edit.ejs', { book });
});

// Search Routes/Controllers

// Send a page dedicated to allowing a user to search
app.get('/books/search', (req, res) => {
    if(req.query.title) {
        Book.find({title: { $regex: req.query.title }}, (err, books) => {
            res.json(books);
        });
    } else {
        res.render('search.ejs');
    }
});


// Show Route
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('show.ejs', { book });
    } catch (error) {
        console.log(error.message)
        res.render('error.ejs');
    }
});






// Tell the App to listen for requests

app.listen(PORT, () => { 
    console.log(`Express is listening on port:${PORT}`);
});