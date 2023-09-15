require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
// const jokes = require('./jokes.json')
const port = process.env.PORT

const fs = require('fs');
const jokes = JSON.parse(fs.readFileSync('jokes.json', 'utf8'));

app.use(express.json());
app.use(cors());



app.get('/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    const randomJoke = jokes[randomIndex]
    res.json({joke: randomJoke})
    // res.send(`Hello from moms!`)
})
app.post('/jokes', (req, res) => {
const newJoke = req.body
jokes.push(newJoke)
fs.writeFileSync('jokes.json', JSON.stringify(jokes), 'utf8')
res.sendStatus(201).send(newJoke)
})

app.get('/jokes', (req, res) => {
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
