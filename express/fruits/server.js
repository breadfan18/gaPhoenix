const express = require("express");
const fruits = require('./models/fruits');
const app = express()


// Index
app.get("/fruits/", (req, res) => {
    res.render('index.ejs', {
        fruits
    })
})

// Show
app.get("/fruits/:id", (req, res) => {
    const foundFruit = fruits.find(fruit => fruit.id === parseInt(req.params.id));
    
    res.render('show.ejs', {
        fruit: foundFruit
    });
})

// Middleware
app.use(express.static('public'));


// App listener
app.listen(3000, () => {
    console.log("listening")
})