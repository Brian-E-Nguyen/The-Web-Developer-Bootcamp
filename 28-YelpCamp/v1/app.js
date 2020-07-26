var express = require('express');
var app = express();
const portNumber = 1193;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    var campgrounds = [
        {name: 'Salmon Creek', image: 'https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&h=350'},
        {name: 'Mountain Goat\'s Rest', image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350'},
        {name: 'Granite Hill', image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350'},
    ]

    res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(portNumber, function() {
    console.log(`YelpCamp server has started at port ${portNumber}`);
});