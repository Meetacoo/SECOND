const mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
	category: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'category'
	},
	user: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	title: {
		type:String
	},
	intro: {
		type:String
	},
	content: {
		type:String
	},
	click: {
		type:Number,
		default:0
	},
	date: {
		type:Date,
		default: Date.now
	}
});

const ArticleModel = mongoose.model('Article',ArticleSchema);
module.exports = ArticleModel;