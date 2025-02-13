const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

// Exercise 1

app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.username}.</h1>`)
})

// Exercise 2

app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
        res.send('<h1>You must specify a number.</h1>')
    } else {
        res.send(`<h1>You rolled a ${Math.floor(Math.random() * req.params.number) + 1}</h1>`)
    }
})

// Exercise 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    let index = req.params.index
    if (!collectibles[req.params.index]) {
        res.send('<h1>This item is not yet in stock. Check back soon!')
    } else {
        res.send(`<h1>So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!</h1>`)
    }
})

// Exercise 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    if (req.query['min-price']) {
        const expensiveShoes = shoes.filter(shoes => shoes.price >= req.query['min-price'])
        res.send(expensiveShoes)
    } else if (req.query['max-price']) {
        const cheapShoes = shoes.filter(shoes => shoes.price <= req.query['max-price'])
        res.send(cheapShoes)
    } else if (req.query.type) {
        const shoeType = shoes.filter(shoes => shoes.type === req.query.type)
        res.send(shoeType)
    } else {
    res.send(shoes)
    }
})