const express = require("express")
const app = express()

const fruits = [
    {
        id: 1,
        name: 'apple',
        color: 'blue',
        readyToEat = true
    },
    {
        id: 2,
        name: 'apple',
        color: 'green',
        readyToEat = false
    },
    {
        id: 3,
        name: 'orange',
        color: 'orange',
        readyToEat = false
    },
    {
        id: 4,
        name: 'banana',
        color: 'green',
        readyToEat = false
    },
    {
        id: 5,
        name: 'pineapple',
        color: 'yellow',
        readyToEat = true
    },

]

// Index
app.get("/fruits/", (req, res) => {
    res.send(fruits)
})

// Show
app.get("/fruits/:indexOfFruit", (req, res) => {
    res.send(fruits[req.params.indexOfFruit])
})



// App listener
app.listen(3000, () => {
    console.log("listening")
})