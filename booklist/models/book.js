// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }, 
    completed: Boolean
}, { timestamps: true })

// export the model to be accessed in server.js
module.exports = mongoose.model('Book', bookSchema);
