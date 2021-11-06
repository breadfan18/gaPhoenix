// Require dependencies
const express = require('express');
const plants = [
    "Monstera Deliciosa",
    "Corpse Flower",
    "Elephant-Foot Yam",
    "Witches' Butter",
  ]

const categories = [
    "Tropical",
    "Succulents",
    "Cactus",
    "Birds of Paradise",
  ]


// Initialize the app
const app = express();


// Configure App Settings


// Setup a port value
const port = 3000;


// Mount middleware


// Mount routes
app.get('/', (req, res) => {
    res.send('Welcome to the Plants Website');
})

app.get('/plants/categories', (req, res) => {
    console.log(req.params);
    res.send(categories);
})

app.get('/plants/:index', (req, res) => {
    console.log(req.params);
    res.send(`
        <h1>${plants[req.params.index]}</h1>
    `);
})

app.get('/:firstName/:lastName', (req, res) => {
    const title = req.query.title;
    const location = req.query.location;
    const name = req.params.firstName;

    const phrase = `${name} is from ${location}, and is currently working as a ${title}`

    res.send(phrase);
})


// Tell the app to listen
app.listen(port, () => console.log('Express is listening at port ' + port));


// different types of routes: 
/* 
INDEX
NEW 
DELETE
UPDATE
CREATE
EDIT
SHOW
*/