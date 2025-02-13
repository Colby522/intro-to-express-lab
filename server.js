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
        res.send(`You rolled a ${Math.floor(Math.random() * req.params.number) + 1}`)
    }
})