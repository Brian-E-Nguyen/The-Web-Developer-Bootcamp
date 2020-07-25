var express = require('express')
var app = express();
var axios = require('axios')
const portNumber = 1193;

app.get('/results', function(req, res) {
    axios.get('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb')
    .then(function(response) {
        res.send(response.data.Search);
        console.log(response.data.Search);
    })
    .catch(function(error){
        console.log(error)
    })
});

app.listen(portNumber, function(){
    console.log(`Server started at port ${portNumber}`);
});