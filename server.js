const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());

const { Deck, Hand } = require('./public/deck');

const deck = new Deck();

let table = deck.dealTable(5);

app.get('/table', (req, res) => {
    res.send(table);
});

app.get('/deck/:size', (req, res) => {
    const { size } = req.params;
    res.send(deck.dealTable(size));
});

app.listen(4001, () => {
    console.log('Server running on port 4001');
});