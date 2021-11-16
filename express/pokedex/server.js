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
app.use(express.urlencoded({ extended: false })); //access req.body
app.use(express.static('public')) //makes public assets available
const methodOverride = require('method-override'); //method override
app.use(methodOverride('_method'))


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

app.post('/pokemons', (req, res) => {

    const newPoke = {
        ...req.body,
        id: (pokemons.length + 1).toString()
    }

    pokemons.push(newPoke);
    res.redirect('/pokemons');
})

// show route
app.get('/pokemons/:id', (req, res) => {
    const thisPokemon = pokemons.find(pokemon => req.params.id === pokemon.id)

    res.render('show.ejs', {
        thisPokemon
    });
});

// Update route
app.get('/pokemons/:id/edit', (req, res) => {
    let index = parseInt(req.params.id - 1);
    res.render('edit.ejs', {
        pokemon: pokemons[index],

    })
})

app.put('/pokemons/:id', (req, res) => {
    let editedPoke = {
        ...req.body,
        id: req.params.id
    }
    pokemons[parseInt(req.params.id - 1)] = editedPoke;
    res.redirect(`/pokemons`);
})

// Delete route
app.delete('/pokemons/:id', (req, res) => {
    pokemons.splice(req.params.id-1, 1);
    res.redirect('/pokemons');  
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Pokedex app listening on port: ${port}`)
});

// TEST

console.log('Array Console Log: ', pokemons[pokemons.length-1].id)