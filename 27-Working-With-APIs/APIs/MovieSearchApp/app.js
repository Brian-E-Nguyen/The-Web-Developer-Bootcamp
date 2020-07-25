var express = require('express');
var app = express();
var axios = require('axios');
const portNumber = 1193;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('search')
})

app.get('/results', function(req, res) {
    var query = req.query.search;
    axios.get(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`)
    .then(function(response) {
        res.render('results', {data: response.data});
    })
    .catch(function(error){
        console.log(error)
    })
});

app.listen(portNumber, function(){
    console.log(`Server started at port ${portNumber}`);
});