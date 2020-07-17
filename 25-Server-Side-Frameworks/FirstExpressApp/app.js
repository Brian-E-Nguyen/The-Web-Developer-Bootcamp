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

app.get('/r/:subredditName', function(req, res) {
    // console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send(`WELCOME TO THE ${subreddit.toUpperCase()} SUBREDDIT!`);
});

app.get('/r/:subredditName/comments/:id/:title/', function(req, res) {
    console.log(req.params);
    res.send('Welcome to the comments page!');
});

// Directs to this URL from any request other than the 3 above
// THE ORDER OF THE ROUTES MATTER
// When a request is made, it checks all routes going down the list
app.get('*', function(req, res) {
    res.send('You are a star!')
})

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
    console.log('Server has started');
})