var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const portNumber = 1193;
var friends = ['Brian', 'Mike', 'Chester', 'Lily'];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/addFriend', function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends')
});

app.get('/friends', function(req, res){
    res.render('friends', {friendsVar: friends});
  });

app.listen(portNumber, function(){
    console.log(`Server started at port ${portNumber}`);
});