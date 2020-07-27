var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.messaage));

// Tells JS that cats should be defined as this
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
// Cat object that is a pattern for our other cats
var Cat = mongoose.model('Cat', catSchema);

// // adding a new cat to the database
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// // There's a possibility that it will not save
// // Internet's down or the console is not running
// george.save(function(err, cat) {
//     if(err) {
//         console.log('ERROR');
//     }
//     else {
//         console.log('Insertion successful!');
//         console.log(cat);
//     }
// });
Cat.create({
    name: "Miki",
    age: 15,
    temperament: "Bland"
}, function(error, cat) {
    if(error) {
        console.log('OH NO! ERROR!');
    }
    else {
        console.log(cat);
    }
});
// retrieve all cats from the database
Cat.find({}, function(error, cats) {
    if(error) {
        console.log('OH NO! ERROR!');
    }
    else {
        console.log('ALL THE CATS...........');
        console.log(cats)
    }
});