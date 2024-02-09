var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    breed: String,
    size: String,
    weight: String,
    fur: String
},
{
    collection: 'dogs'
});

module.exports = mongoose.model('DogsModel', DogSchema);