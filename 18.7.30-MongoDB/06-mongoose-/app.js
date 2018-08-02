const mongoose = require('mongoose');
const UserModel = require('./models/user.js');
const BlogModel = require('./models/blog.js');

mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
	throw err;
})
db.once('open',()=>{
	console.log('db connected ok...');

	UserModel.distinct('name',(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('distinct error::',err);
		}
	})
})

