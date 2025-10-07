// Budget API
const express = require('express');
const cors = require('cors');
const fs = require('fs'); // AI Resource
const app = express();
const port = 3000;

app.use(express.static('public')); // serve frontend files
app.use(cors());

app.get('/budget', (req, res) => {
    fs.readFile('./budget.json', 'utf8', (err, data) => { // AI Resource
        if (err) {
            console.error(err);
            res.status(500).send('Error reading budget file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
