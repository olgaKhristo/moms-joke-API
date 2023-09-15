require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const jokes = require('./jokes.json')
const port = process.env.PORT

app.use(cors());
app.use(express.json());

const jokes = {
    message:'Hello from moms!'
}

app.get('/', (req, res) => {
    res.json(jokes)
    // res.send(`Hello from moms!`)
})

app.get('/jokes', (req, res) => {
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
