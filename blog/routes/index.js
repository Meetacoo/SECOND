const Router = require('express').Router;
const blogModel = require('../models/blog.js');

const router = Router();

// 显示首页
router.get('/',(req,res)=>{
	// console.log(req.cookies.get('userInfo'));
	// console.log(req.userInfo);
	res.render('main/index',{
		userInfo:req.userInfo
	});
})

module.exports = router;