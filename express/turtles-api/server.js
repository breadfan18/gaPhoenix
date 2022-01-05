// Instantiate express app
const express = require('express');
const mongoose = require('mongoose');
const skillsController = require('./controllers/skills');

// Initialize the app
const app = express();

//Configure settings
require('dotenv').config();

//Connect with mongo
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

// Setup mongo event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (error) => console.log(`Mongo Error: ${error.message}`));

// Mount middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json()) //this will create req.body with incoming JSON
app.use('/api/skills', skillsController);



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))