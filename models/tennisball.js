var mongoose = require('mongoose');

var TennisballSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Tennisball', TennisballSchema);
