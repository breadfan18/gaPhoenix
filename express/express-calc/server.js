const express = require("express")
const app = express()

const port = 3000


// Routes
app.get('/calc/:num1/:num2', (req, res) => {
    res.send(`The sum is: ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
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

