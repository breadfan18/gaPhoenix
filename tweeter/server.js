// Require dependencies 
const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;


// Initialize the express app
const app = express();

// Connect to and config mongodb
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.hbi4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Mount middleware 


// Mount routes 


// Tell the app to listen
app.listen(PORT, () => console.log('Express is listening on port ' + PORT))