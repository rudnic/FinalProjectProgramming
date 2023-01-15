const express = require('express');
const path = require('path');

var app = express();

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000);

module.exports.app = app;