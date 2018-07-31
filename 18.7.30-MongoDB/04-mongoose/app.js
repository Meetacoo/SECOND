const mongoose = require('mongoose');

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
	const User = mongoose.model('User',UserSchema);
	// console.log(User);

	// 4：

	// 添加
	/*const user = new User({name:'Jackson Yee',age:17,sex:'male'});
	user.save((err,doc)=>{
		if (!err) {
			console.log(doc);
		} else {
			console.log('save data error::',err);
		}
	})*/

	// 查找
	/*User.find({name:'Jackson Yee'},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('find data error:',err);
		}
	})*/

	// 更新
	/*User.updateOne({name:'Jackson Yee'},{$set:{age:18}},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log("update data error:",err);
		}
	})*/

	// 删除
	User.remove({age:18},(err,result)=>{
		if (!err) {
			console.log(result);
		} else {
			console.log('delete data error:',err);
		}
	})
})

