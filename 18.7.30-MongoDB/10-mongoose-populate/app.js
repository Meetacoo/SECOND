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
		author: "5b63a6fc02b4142384d93a74",
		title: "今天天气真好",
		content: "确实挺好"
	},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('insert error::',err);
		}
	})*/

	/*UserModel.findOne({name:'JacksonYee'},(err,docs)=>{
		docs.findMyBlogs((err,docs)=>{
			console.log(docs);
		})
	})*/
	/*UserModel.findMyPhone('15090266125',(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('findMyPhone error::',err);
		}
	})*/


	// 1：：：
	/*BlogModel.findOne({title:"今天天气真好"},(err,blog)=>{
		if (!err) {
			UserModel.findOne(blog.author,(err,user)=>{
				if (!err) {
					// 1：：：
					// blog.author = user;
					// console.log(blog);

					// 2：：：
					let result = {};
					// console.log(result.blog);
					// 添加属性
					result.blog = blog;
					result.user = user;
					console.log(result);
				} else {
					console.log('find user error:::',err);
				}
			})
			// console.log(blog)
		} else {
			console.log('find blog error:::',err);
		}
	})*/

	// 2：：：
	/*BlogModel
	.findOne({title:"今天天气真好"})
	// 用 populate 必须在定义该字段时添加 ref 属性，ref:'User'，指定查询集合
	.populate('author','name')
	// populate 方法返回的是一个 promise，所以要用 then 方法
	.then((docs)=>{
		console.log(docs);
	})*/

	// 静态方法

	// 1:::
	/*BlogModel.findBlogs({title:"今天天气真好"},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log(err);
		}
	});*/

	// 2:::
	BlogModel.findBlogs({title:"今天天气真好"})
	// 要用then方法去触发 resolve和reject
	.then((docs)=>{
		console.log(docs);
	})
	.catch((err)=>{
		console.log(err);
	})
})