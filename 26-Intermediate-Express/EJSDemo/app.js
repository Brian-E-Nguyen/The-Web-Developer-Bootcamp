var express = require('express');
var app = express();
const portNumber = 1193;

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.listen(portNumber, function() {
    console.log(`Server started at port ${portNumber}`)
});
