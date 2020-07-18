var express = require('express');
var app = express();
const portNumber = 1193;

// Tells express to serve the contents of the 'public' folder
app.use(express.static('public'));

// Files are expected to be .ejs files
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Adorable Mimi', author: 'Kiki'},
        {title: 'Poms Are the Best', author: 'Brian'},
    ];

    res.render('posts', {posts: posts})
})

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.listen(portNumber, function() {
    console.log(`Server started at port ${portNumber}`)
});
