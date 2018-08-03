const mongoose = require('mongoose');
const moment = require('moment');
const UserModel = require('./models/user.js');
const BlogModel = require('./models/blog.js');

mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
	throw err
})
db.once('open',()=>{
	console.log('db connected ok...');

	UserModel.insertMany({
		name: 'JacksonYee',
		age: 17,
		sex: 'male',
		phone: '15090266125',
		locked: false,
		createdAt: Date(),
		friends: ['Meta','Yee']
	},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('insertMany error::',err.message);
		}
	})
})

