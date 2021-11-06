// this file is a module AKA node module
// server.js is always the entry point of our application 
// this is the first js file that gets executed when our server runs
// this is where we configure settings and anything else our server needs 


// require dependencies
const express = require('express'); //we use require statements to include code from a node module 


// initialize this application
const app = express();


// configure application settings


// configure our "mount" middleware


// define our routes
app.get('/', (req, res) => {
    res.json('Hello World')
})

app.get('/people', (req, res) => {
    res.json([{name: 'Swaroop', city: 'San Francisco'}, {name: 'Anshu', city: 'Washington DC'}])
})

// tell the application to listen for requests from the client or the browser
app.listen(3000, () => console.log('Express is listening for requests from the browser') )
