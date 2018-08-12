const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	article: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'Article'
	},
	user: {
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	content: {
		type:String 
	},
	date: {
		type:Date,
		default: Date.now
	}
});

const CommentModel = mongoose.model('Comment',CommentSchema);
module.exports = CommentModel;