// require dependencies
const mongoose = require('mongoose');
// set up shortcut variable
const Schema = mongoose.Schema;
// create the schema
const bookSchema = new Schema({
    title: { type: String, required: true, lowercase: true},
    author: { type: String, required: true, lowercase: true},
    completed: { type: Boolean, default: false },
    coverImageURL: {type: String, default: '/images/default.jpeg'},
    excerpt: { type: String, default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corrupti dicta tempore magnam soluta accusantium enim. Sit sequi consequatur magnam nihil, sint facilis, vel aspernatur, deleniti voluptate nisi delectus optio?" },
    // date: { type: Date, default: function() { return new Date() }}
}, { timestamps: true });
// compile the schema into a model

// export the model so we can access it somewhere else
module.exports = mongoose.model('Book', bookSchema);

