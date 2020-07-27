var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const portNumber = 1193;

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

var campgrounds = [
    {name: 'Salmon Creek', image: 'https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {name: 'Mountain Goat\'s Rest', image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {name: 'Granite Hill', image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {name: 'Salmon Creek', image: 'https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {name: 'Mountain Goat\'s Rest', image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350'},
    {name: 'Granite Hill', image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350'},
]


app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res) {
    res.render('newcampground.ejs');
});

app.post('/campgrounds', function(req, res) {
    // Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // Redirect to campgrounds page
    res.redirect('/campgrounds');
});

app.listen(portNumber, function() {
    console.log(`YelpCamp server has started at port ${portNumber}`);
});