const express = require("express")
const app = express()
const superheroes = [ 'Superman', 'Wonder Woman', 'Black Panther' ];

// Index
app.get("/superheroes/", (req, res) => {
    res.send(superheroes)
})

// Show
app.get("/superheroes/:index", (req, res) => {
    res.send(superheroes[req.params.index]);
})

// App listener
app.listen(3000, () => {
    console.log("Here to save the day, you fools...")
})