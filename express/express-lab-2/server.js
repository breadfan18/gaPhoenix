// require express and set up the app 
const express = require('express');
const app = express();
const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


// Routes 
app.get('/', (req, res) => {
    res.send('Welllll')
})

app.get('/greeting', (req, res) => {
    res.send('Hello Stranger');
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`);
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Total tip: ${req.params.total * (req.params.tipPercentage/100)}`);
})

app.get('/magic/:question', (req, res) => {
    const question = req.params.question;
    res.send(`Magic 8 ball response: <h1>${eightBall[Math.floor(Math.random()*eightBall.length)]}</h1>`);
})

// Listening
app.listen(3000, () => console.log('Express lab 2 is lisntening on port 3000'));
