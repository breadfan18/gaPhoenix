// Require dependencies
const mongoose = require('mongoose');


// Create a mongoose Schema
const tweetSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

// Compile mongoose schema into a mongoose model
const Tweet = mongoose.model('Tweet', tweetSchema);

/* 
The Tweet mongoose object now has access to all the mongoose methods. 

Tweet.create()
Tweet.find()
Tweet.findById()
Tweet.findOne()
Tweet.findByIdAndUpdate()
Tweet.findByIdAndDelete()
*/

// Use mongoose model methods to perform CRUD data operaions on a mongodb collection 
module.exports = Tweet;
