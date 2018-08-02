const mongoose = require('mongoose');

function getRandom(min,max){
	return Math.round(min + (max - min) * Math.random());
}

const nameArr = ['Tom','Jackson','Yee','Jack','Baby','Micky','Laura','Meta','Leo','Lala'];
function getName(){
	return nameArr[getRandom(0,nameArr.length-1)];
} 
function getAge(){
	return getRandom(10,100);
}
const sexArr = ['male','female']
function getSex(){
	return sexArr[getRandom(0,sexArr.length-1)]
}

// 1：连接到数据库
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;
// console.log(db);
db.on('error',(err)=>{
	// throw 'DB error'
	throw err;
})
db.once('open',()=>{
	console.log('db connected ok...');

	// 2：定义Schema
	var UserSchema = new mongoose.Schema({
		name: String,
		age: Number,
		sex: String
	});

	// 3：用定义好的 Schema 生成 model
	// 注意：model 生成的第一个参数会生成数据库中的集合名称
	const UserModel = mongoose.model('User',UserSchema);
	// console.log(UserModel);

	// 4：用 model 操作数据库

	// CRUD
	// 添加

	// Model.insertMany()
	/*// 1::
	UserModel.insertMany({name:'Jackson Yee',age:17,sex:'male'},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log("insertMany error::",err);
		}
	})*/
	/*// 2::
	UserModel.insertMany([{name:'Jackson Yee1',age:17,sex:'male'},{name:'Jackson Yee2',age:17,sex:'male'}],(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log("insertMany error::",err);
		}
	})*/
	/*// 3::
	let promise = UserModel.insertMany([{name:'Jackson Yee3',age:17,sex:'male'},{name:'Jackson Yee4',age:17,sex:'male'}]);
	promise
	.then((docs)=>{
		console.log(docs);
	})
	.catch((err)=>{
		console.log("insertMany error::",err);
	})*/

	// promise.then.save();
	// const user = new UserModel({name:'Jackson Yee6',age:17,sex:'male'});
	// const user = new UserModel({name:'Jackson Yee7',age:17,sex:'male'});
	// const user = new UserModel({name:'Jackson Yee8',age:17,sex:'male'});
	/*// 1::
	user.save((err,doc)=>{
		if (!err) {
			console.log(doc);
		} else {
			console.log('save data error::',err);
		}
	})*/
	/*// 2::
	let promise = user.save();
	promise
	.then((docs)=>{
		console.log(docs);
	})
	.catch((err)=>{
		console.log("insertMany error::",err);
	})*/
	/*// 3::
	new UserModel({name:'Jackson Yee7',age:17,sex:'male'})
	.save()
	.then((docs)=>{
		console.log(docs);
	})*/

	// Model.create()
	/*// 1::
	UserModel.create({name:'Jackson Yee8',age:17,sex:'male'},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('Model.create error::',err);
		}
	})*/
	/*// 2::
	UserModel.create({name:'Jackson Yee9',age:17,sex:'male'},{name:'Jackson Yee10',age:17,sex:'male'},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('Model.create error::',err);
		}
	})*/
	/*// 3::
	UserModel.create([{name:'Jackson Yee11',age:17,sex:'male'},{name:'Jackson Yee12',age:17,sex:'male'}],(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('Model.create error::',err);
		}
	})*/

	// 查找
	/*const usersArr = [];
	for (var i = 0; i < 15; i++){
		usersArr.push({name:getName(),age:getAge(),sex:getSex()})
	}
	UserModel.insertMany(usersArr,(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log("insertMany error::",err);
		}
	})*/

	// Model.find()
	/*// 1::
	UserModel.find({name:'Jack'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/
	/*// 2::
	UserModel.find({name:'Jack'},{name:1,_id:0},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/
	/*// 3:: 与 2:: 相同
	UserModel.find({name:'Jack'},'name -_id',(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/
	/*// 4::
	UserModel.find({name:'Laura'},null,{skip:1,limit:2},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/
	/*// 5::
	UserModel.find({name:'Laura'},null,{sort:{age:-1}},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/

	// Model.findById()
	/*// 1::
	UserModel.findById('5b627a145dd9ef0f7cbc9bb9',(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.findById error:',err);
		}
	})*/
	/*// 2::
	UserModel.findById('5b627a145dd9ef0f7cbc9bb9',{name:1,_id:0},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.findById error:',err);
		}
	})*/

	// Model.findOne()
	// 1::
	/*UserModel.findOne({name:'Laura'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/
	// 2::
	/*UserModel.findOne({name:'Laura'},null,{skip:1},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('UserModel.find error:',err);
		}
	})*/

	// 更新
	// Model.update()
	// Model.updateOne()
	// Model.updateMany()

	// Model.update()
	/*// 1::
	UserModel.update({name:'Jack'},{$set:{age:18}},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log("update error:",err);
		}
	})*/
	/*// 2:: 加不加 $set 都一样，{$set:{age:19}} 等价于 {age:19}
	UserModel.update({name:'Jack'},{age:19},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log("update error:",err);
		}
	})*/
	// Model.updateOne()
	/*UserModel.updateOne({name:'Jack'},{$set:{age:20}},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log("updateOne error:",err);
		}
	})*/
	// Model.updateMany()
	/*UserModel.updateMany({name:'Jack'},{$set:{age:21}},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log("updateMany error:",err);
		}
	})*/

	// 删除
	// Model.remove()
	// Model.deleteOne()
	// Model.deleteMany()

	// Model.remove()
	/*// 1::
	UserModel.remove({name:'Jack'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('delete data error:',err);
		}
	})*/
	/*// 2::
	UserModel.remove({name:'Laura'})
	.setOptions({single:true})
	.then((result)=>{
		console.log(result);
	})*/
	/*// Model.deleteOne()
	UserModel.deleteOne({name:'Laura'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('deleteOne data error:',err);
		}
	})*/
	/*// Model.deleteMany()
	UserModel.deleteMany({name:'Tom'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('deleteMany data error:',err);
		}
	})*/

	UserModel.distinct('name',(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('distinct error::',err);
		}
	})
})

