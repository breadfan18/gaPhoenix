// Require dependencies
const express = require('express');
const plants = [
    "Monstera Deliciosa",
    "Corpse Flower",
    "Elephant-Foot Yam",
    "Witches' Butter",
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

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
})


// Tell the app to listen
app.listen(port, () => console.log('Express is listening at port ' + port))