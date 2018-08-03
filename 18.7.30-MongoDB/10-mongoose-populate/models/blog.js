const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
// console.log(mongoose);
var db = mongoose.connection;

var BlogSchema = new mongoose.Schema({
	author: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	title: String,
	content: String
});

// 1:::
/*BlogSchema.statics.findBlogs = function(query = {},callback){
	this.find(query)
	.populate('author')
	.then((docs)=>{
		callback(null,docs);
	})
	.catch((err)=>{
		callback(err);
	})
}*/

// 2:::
BlogSchema.statics.findBlogs = function(query = {}){
	let promise = new Promise((resolve,reject) => {
		this.findOne(query)
		.populate('author')
		.then((docs)=>{
			resolve(docs);
		})
		.catch((err)=>{
			reject(err);
		})
	})
	return promise;
}

const BlogModel = mongoose.model('Blog',BlogSchema);
module.exports = BlogModel;