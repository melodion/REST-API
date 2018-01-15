var mongoose = require('mongoose');

var RestSchema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('Rest', RestSchema);