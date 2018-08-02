const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;

var UserSchema = new mongoose.Schema({
	name: {
		type:String
	},
	age: {
		type:Number,
		default:10 // 设置默认值
	},
	sex: {
		type:String,
		enum:['male','female'] // 枚举，约束数据
	},
	locked:{
		type:Boolean
	},
	createdAt:{
		type:Date,
		default:Date.now // 设置默认时间
	},
	friends:{
		type:Array
	}

});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;