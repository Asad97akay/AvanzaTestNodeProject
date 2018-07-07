var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    guid:String,
    name: String,
    message: String,
    date: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
