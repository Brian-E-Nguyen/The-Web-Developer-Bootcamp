var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hi here, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        dog: "Woof",
        cow: "Moo",
    };
    var sound = sounds[animal];
    res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:message/:times', function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (let i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result)
})

app.get('*', function(req, res) {
    res.send('Sorry, page not found...What are you doing with your life?')
})

app.listen(1193, function() {
    console.log('Server at port 1193 starting')
});