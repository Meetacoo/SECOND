const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;

var UserSchema = new mongoose.Schema({
	name: {
		type:String,
		// require: true
		required: [true,'必须输入用户名'],
		maxlength: [10,'最多10个字符'],
		minlength:[2,'最少2个字符']
	},
	age: {
		type:Number,
		default:10, // 设置默认值
		min: [1,'最小1岁'],
		max: [120,'最大120岁']
	},
	sex: {
		type:String,
		enum:['male','female'] // 枚举，约束数据
	},
	phone: {
		type:String,
		validator:function(val){
			return /1[358]\d{9}/.test(val)
		},
		message:'{VALUE} 不合法'
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

UserSchema.methods.findMyBlogs = function(callback){
	// console.log(this);
	// console.log(this._id);
	// console.log(this.model('Blog'));
	// this是 UserModel的一个实例
	// 在Model的原型上有Model.prototype.model()方法,该方法返回一个指定的Model   
	this.model('Blog').find({author:this._id},(err,docs)=>{
		callback(null,docs)
	})
}

UserSchema.statics.findMyPhone = function(phone,callback){
	// console.log(this); 
	// console.log(this === UserModel);kbkbkb // true
	// 这个 this 指 const UserModel = mongoose.model('User',UserSchema);
	// console.log(this.model('User'));
	// console.log(this.model('User') === this); // true
	// console.log(this.model('Blog') === this); // false

	// callback(null,docs);
	this.findOne({phone:phone},(err,docs)=>{
		if (!err) {
			callback(null,docs);
		} else {
			callback('findMyPhone error', err);
		}
	})
}
const UserModel = mongoose.model('User',UserSchema);
// console.log('UserModel::::',UserModel)
module.exports = UserModel;