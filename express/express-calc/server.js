const express = require("express")
const app = express()

const port = 3000

let num1, num2;

// Routes
app.get('/:num1/:num2', (req, res) => {
    
    res.send(`
        <p>Select Operation</p>
        <a href="/calcquery/${req.params.num1}/${req.params.num2}?operation=sum">Sum</a>
        <a href="/calcquery/${req.params.num1}/${req.params.num2}?operation=substract">Substract</a>
        <a href="/calcquery/${req.params.num1}/${req.params.num2}?operation=multiply">Multiply</a>
        <a href="/calcquery/${req.params.num1}/${req.params.num2}?operation=divide">Divide</a>
    `)
})

app.get('/someroute', (req, res) => {
    console.log('query', req.query);
    res.send('someroute accessed');
})

app.get('/calcquery/:num1/:num2', (req, res) => {
    switch(req.query.operation){
        case 'sum':
            console.log('Add them bitches');
            res.send(`${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
        case 'substract':
            res.send(`${parseInt(req.params.num1) - parseInt(req.params.num2)}`);
        case 'multiply':
            res.send(`${parseInt(req.params.num1) * parseInt(req.params.num2)}`);
        case 'divide':
            res.send(`${parseInt(req.params.num1) / parseInt(req.params.num2)}`);
    }
})

// Listener
app.listen(port, () => {
  console.log("Express Calc is listening on port: ", port);
})

