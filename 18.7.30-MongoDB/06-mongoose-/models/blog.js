const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;

var BlogSchema = new mongoose.Schema({
	author: String,
	title: String,
	content: String
});

const BlogModel = mongoose.model('Blog',BlogSchema);
module.exports = BlogModel;