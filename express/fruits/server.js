const express = require("express");
const fruits = require('./models/fruits');
const app = express()

// Middleware
app.use(express.static('public'))

app.use(function(req, res, next) {
    console.log('I will run with each request');
    req.timeStamp = new Date();
    next();
})

app.use(express.urlencoded({ extended: false }))


// Index
app.get("/fruits/", (req, res) => {
    console.log(req.timeStamp.toLocaleDateString())
    res.render('index.ejs', {
        fruits
    })
})

// New 
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/fruits', (req, res) => {
    // since our fruit objects have an id property, we need to satisfy the id property requirement 
    req.body.id = fruits.length + 1;

    // we need to cast the string value of 'on' OR the absense of that value to a boolean
    req.body.readyToEat = !!req.body.readyToEat

    fruits.push(req.body);

    res.redirect('/fruits')
})

// Show
app.get("/fruits/:id", (req, res) => {
    const foundFruit = fruits.find(fruit => fruit.id === parseInt(req.params.id));
    
    res.render('show.ejs', {
        fruit: foundFruit
    });
})

// Delete 
app.delete('/fruits/:index', (req, res) => {
    fruits.splice(req.params.index, 1)
    res.redirect('/fruits');
})


// Put, which means Update





// App listener
app.listen(3000, () => {
    console.log("listening")
})