const express = require("express")
const app = express()
const superheroes = [ 
    {
        name: "Superman", 
        powers: ['flight', 'invulnerability', 'x-ray vision']
    },
    {
        name: "Spiderman", 
        powers: ['spiderwebs', 'mask', 'hot chick']
    },
    {
        name: "Iron Man", 
        powers: ['brain power', 'armor', 'money']
    },
    {
        name: "Batman", 
        powers: ['emotional', 'cop friends', 'technology']
    }
 ];

 const villians = [
    {
      name: 'Lex Luthor',
      powers: ['super brain'],
    },
    {
      name: 'Ares',
      powers: ['shape shifting', 'teleporting'],
    },
    {
      name: 'Killmonger',
      powers: [
        'ability to fit in Black Panther\'s suit',
        'internet agreement that he looks badass',
      ],
    },
  ];

// Index
app.get("/superheroes/", (req, res) => {
    res.send(superheroes)
})

app.get("/villians/", (req, res) => {
    res.send(villians)
})

// Show
app.get("/superheroes/:name", (req, res) => {
    const currentHero = superheroes.find(hero => hero.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(`
        <h1>${currentHero.name}</h1>
        <ul>
            <li>${currentHero.powers[0]}</li>
            <li>${currentHero.powers[1]}</li>
            <li>${currentHero.powers[2]}</li>
        </ul>
    `);
})

app.get("/villians/:name", (req, res) => {
    const currentVillian = villians.find(villian => villian.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(`
        <h1>${currentVillian.name}</h1>
        <ul>
            <li>${currentVillian.powers[0]}</li>
            <li>${currentVillian.powers[1]}</li>
        </ul>
    `);
})

// App listener
app.listen(3000, () => {
    console.log("Here to save the day, you fools...")
})