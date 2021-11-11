// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {
    bakedGoods
  });
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  const bakedGood = bakedGoods.find(good => parseInt(req.params.id) === good.id)

  res.render('show.ejs', {
    bakedGood
  });
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
