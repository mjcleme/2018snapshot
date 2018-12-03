// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
    var kittySchema = new mongoose.Schema({
        name: String
    });
    kittySchema.methods.speak = function() {
        var greeting = this.name ?
            "Meow name is " + this.name :
            "I don't have a name";
        console.log(greeting);
    }
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({ name: 'Silence' });
    silence.speak();
    console.log(silence.name);
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.save(function(err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
    });
    Kitten.find({ name: /^fluff/ }, function(err, fluffy) {
        if (err) return console.error(err);
        console.log(fluffy);
        for(var cat in fluffy) {
            console.log("Find Name "+fluffy[cat].name);
        }
        
    });
});
