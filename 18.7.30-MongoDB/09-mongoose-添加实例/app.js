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

	/*UserModel.insertMany({
		name: 'JacksonYee',
		age: 17,
		sex: 'male'
	},(err,docs)=>{
		if (!err) {
			console.log(docs)
		} else {
			console.log('insertMany error::',err.message);
		}
	})*/
	/*BlogModel.insertMany({
		author: "5b62cf573926eb2f547ae28b",
		title: "今天天气真好",
		content: "好个屁"
	},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('insert error::',err);
		}
	})*/

	UserModel.findOne({name:'JacksonYee'},(err,docs)=>{
		docs.findMyBlogs((err,docs)=>{
			console.log(docs);
		})
	})
})

