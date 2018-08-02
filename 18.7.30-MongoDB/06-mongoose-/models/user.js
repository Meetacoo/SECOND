const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	sex: String
});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;