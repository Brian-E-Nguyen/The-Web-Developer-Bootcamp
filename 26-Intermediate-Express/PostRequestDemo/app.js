var express = require('express');
var app = express();
const portNumber = 1193;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/addFriend', function(req, res) {
    console.log(req.body);
    res.send('You have reached the post route')
});

app.get('/friends', function(req, res){
    var friends = ['Brian', 'Mike', 'Chester', 'Lily'];
    res.render('friends', {friendsVar: friends});
  });

app.listen(portNumber, function(){
    console.log(`Server started at port ${portNumber}`);
});