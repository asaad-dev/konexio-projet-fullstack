const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());

const countriesData = require('./countriesData.json');

app.get('/all', (req, res) => {
    res.send({data: countriesData});
});







//Run server
app.listen(300, () => {
    console.log("Listening on port 300");
});