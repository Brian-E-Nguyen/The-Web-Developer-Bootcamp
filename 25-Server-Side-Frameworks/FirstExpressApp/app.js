var express = require('express');
var app = express();
// res contains all of the information
// that we are going to respond with

// req contains all of the information 
// about the request that was made

// '/' -> 'Hi there!'
app.get('/', function(req, res) {
    res.send('Hi there!');
});
// '/bye' -> 'Goodbye!'
app.get('/bye', function(req, res) {
    res.send('Goodbye!');
});
// '/dog' -> 'Meow'
app.get('/dog', function(req, res) {
    res.send('Meow');
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
    console.log('Server has started');
})