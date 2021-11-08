// require express and set up the app 
const express = require('express');
const app = express();
let beerCounter = 99;

// Routes 
app.get('/', (req, res) => {
    res.send(`
        99 Bottlers of beer on the wall
        <a href="/${--beerCounter}">Take one down, pass it around</a>
    `)
})

app.get('/0', (req, res) => {
    res.send(`
        0 Bottles of beer on the wall
    
    `)
})

app.get('/:number_of_bottles', (req, res) => {
    res.send(`
            ${beerCounter} Bottles of beer on the wall
            <a href="/${--beerCounter}">Take one down, pass it around</a>
        `)
})

// Listening
app.listen(3000, () => console.log('Express lab 2 is listening on port 3000'));
