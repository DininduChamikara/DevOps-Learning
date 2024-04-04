var express = require('express');
var app = express();

PORT = 5000

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(PORT, function () {
   console.log(`Express App running at ${PORT}`);
})