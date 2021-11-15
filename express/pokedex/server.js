// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const pokemons = require('./models/pokemon');

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/pokemons', (req, res) => {
  res.render('index.ejs', {
    pokemons
  });
});


// new route
app.get('/pokemons/new', (req, res) => {
    res.render('new.ejs')
})



// show route
app.get('/pokemons/:id', (req, res) => {
  const thisPokemon = pokemons.find(pokemon => req.params.id === pokemon.id)

  res.render('show.ejs', {
    thisPokemon
  });
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Pokedex app listening on port: ${port}`)
});
