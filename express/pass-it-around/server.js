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

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles === 96) {
        res.send(`
            ${req.params.number_of_bottles} Bottles of beer on the wall
            
        `)
    } else {
        res.send(`
            ${--beerCounter} Bottles of beer on the wall
            <a href="/${--beerCounter}">Take one down, pass it around</a>
        `)
    }
})


// Listening
app.listen(3000, () => console.log('Express lab 2 is listening on port 3000'));
