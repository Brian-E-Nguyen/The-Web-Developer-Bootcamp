var express = require('express');
var app = express();
const portNumber = 1193;

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Adorable Mimi', author: 'Kiki'},
        {title: 'Poms Are the Best', author: 'Brian'},
    ];

    res.render('posts.ejs', {posts: posts})
})

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.listen(portNumber, function() {
    console.log(`Server started at port ${portNumber}`)
});
