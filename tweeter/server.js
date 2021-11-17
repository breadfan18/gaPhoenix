// Require dependencies 
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const db = mongoose.connection; //this is an object that represents our database within this application. It contains info related to db name, host, port, and any other relevant info.
const Tweet = require('./models/tweet');

// Initialize the express app
const app = express();

// Connect to and config mongodb
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.hbi4v.mongodb.net/Tweeter?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL);

// Sertup listeners for mongodb events
db.on('connected', () => console.log('Connected to Mongo DB'))
db.on('error', (error) => console.log('Mongo DB Error: ', error.message))


// Mount middleware 
app.use(express.urlencoded({ extended: false }))


// Mount routes 
// Create route
app.post('/tweets', (req, res) => {
    Tweet.create(req.body, (err, tweet) => {
        res.send(tweet);
    })
});

// Index Route
app.get('/tweets', (req, res) => {
    Tweet.find({}, (err, tweets) => {
        res.send(tweets);
    })
})

// Show Route
app.get('/tweets/:id', (req, res) => {
    Tweet.findById(req.params.id, (err, foundTweet) => {
        res.send(foundTweet);
    })
})

// Delete Route
app.delete('/tweets/:id', (req, res) => {
    Tweet.findByIdAndDelete(req.params.id, (err, copyOfDeletedTweet) => {
        res.send(copyOfDeletedTweet);
    })
})

// Update Route
app.put('/tweets/:id', (req, res) => {
    Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedTweet) => {
            res.send(updatedTweet)
        })
})

// Tell the app to listen
app.listen(PORT, () => console.log('Express is listening on port ' + PORT))