const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });

// console.log(mongoose);
var db = mongoose.connection;

var WishSchema = new mongoose.Schema({
	content: {
		type:String
	},
	color: {
		type:String
	}
});

const WishModel = mongoose.model('Wish',WishSchema);
module.exports = WishModel;