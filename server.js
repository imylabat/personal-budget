// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs'); // AI resource
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('./budget.json', 'utf8', (err, data) => { // AI resource
        if (err) {
            console.error(err);
            res.status(500).send('Error reading budget file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

const budget = 


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});