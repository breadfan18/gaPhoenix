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
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({ extended: false }));


// =======================================
//              ROUTES
// =======================================
// index route
app.get('/pokemons', (req, res) => {
    console.log(pokemons.length)

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

// post route
app.post('/pokemons', (req, res) => {
    
    const newPoke = {
        ...req.body,
        id: (pokemons.length+1).toString()
    }

    console.log(newPoke);
    pokemons.push(newPoke);
    res.redirect('/pokemons');
})



// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Pokedex app listening on port: ${port}`)
});
