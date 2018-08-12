const Router = require('express').Router;
const CommentModel = require('../models/comment.js')

const router = Router(); 

// 注册用户
router.post('/add',(req,res)=>{
	let body = req.body;
	// console.log(body);
	new CommentModel({
		article:body.id,
		user:req.userInfo._id,
		content:body.content
	})
	.save()
	.then(comment=>{
		res.json({
			code:0,
			// data:data
		})
	})
})

module.exports = router;