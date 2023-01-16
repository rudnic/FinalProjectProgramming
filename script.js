const express = require('express');
const { calculate } = require('./calc.js')
const path = require('path');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/plus', (req, res) => {
    res.send(calculate(req.query.arg1, req.query.arg2, "+").toString())
})

app.listen(3000);

module.exports.app = app;