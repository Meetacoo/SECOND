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

	/*UserModel.distinct('name',(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('distinct error::',err);
		}
	})*/
	/*UserModel.insertMany({
		name: 'Meta',
		age: 21,
		sex: 'male',
		locked: false,
		createdAt: Date(),
		friends: ['Jackson','Yee']
	},(err,docs)=>{
		if (!err) {
			console.log(docs)
		} else {
			console.log('insertMany error::',err);
		}
	})*/
	/*UserModel.findById('5b62af7e35bb7f0b1c5065fa',(err,docs)=>{
		if (!err) {
			// docs.createdAt 即存起来的时间
			// console.log(docs.createdAt);
			// let date = new Date(docs.createdAt);
			// 输出的是格林尼治时间，要转换的
			// console.log(date.getFullYear() + "-" + (date.getMonth()+1) +"-"+ date.getDate(),":",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
			// console.log(moment().format());
			// console.log(moment(docs.createdAt).format());
			// console.log(moment(docs.createdAt).format('YYYY - MM - DD HH:mm:ss'));
			console.log(moment(docs.createdAt).format('MM - DD - YYYY HH:mm:ss a'));
		} else {
			console.log(err);
		}
	})*/
	BlogModel.insertMany({
		author: "5b62af7e35bb7f0b1c5065fa",
		title: "今天天气真好",
		content: "哦"
	},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('insert error::',err);
		}
	})
})

