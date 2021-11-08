// require express and set up the app 
const express = require('express');
const app = express();



// Routes 
app.get('/', (req, res) => {
    res.send('Welllll')
})
app.get('/greeting', (req, res) => {
    res.send('Hello Stranger');
})


// Listening
app.listen(3000, () => console.log('Express lab 2 is lisntening on port 3000'));
