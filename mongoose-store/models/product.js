// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    img: String, 
    price: {
        type: Number,
        required: true,
        min: 5
    },
    qty: {
        type: Number,
        required: true,
        min: 2
    },

})