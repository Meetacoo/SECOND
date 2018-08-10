const Router = require('express').Router;
const blogModel = require('../models/blog.js');
const catetoryModel = require('../models/category.js')

const router = Router();

// 显示首页
router.get('/',(req,res)=>{
	// console.log(req.cookies.get('userInfo'));
	// console.log(req.userInfo);
/*res.render('main/index',{
	userInfo:req.userInfo
});*/
	catetoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		console.log(categories);
		res.render('main/index',{
			userInfo:req.userInfo,
			categories:categories
		});		
	});
})

module.exports = router;