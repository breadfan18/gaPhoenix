// Instantiate express 
const express = require('express');

// Initiazlie app 
const app = express();


// define the routes 
app.get('/frasier', (req, res) => {
    res.send('Once in a prep school, blah blah...');
})

app.get('niles', (req, res) => {
    res.send('You know, sometimes I wonder...');
})


// Listener 
app.listen(3001, () => console.log('Frasier is litening on port 3001'))