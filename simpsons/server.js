// Instantiate the express app
const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => res.send('Hello Simpsons'))
app.get('/homer', (req, res) => res.send('Hello Homer'))
app.get('/Snowball-II', (req, res) => res.send('This is Snowball II'))
app.get('/renderthis', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1 style = "color: red">Oh ha!</h1>
            </body>
        </html>
    `)
})

// Listener
app.listen(3002, () => console.log('Simpsons are listening on 3002'));
