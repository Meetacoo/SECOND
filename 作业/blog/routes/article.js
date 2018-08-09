const Router = require('express').Router;
const categoryModel = require('../models/category.js');
const articleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');

const router = Router();

//权限控制
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>');
	}
})

// 显示文章页
router.get('/',(req,res)=>{
	res.render('admin/article_list',{
		userInfo:req.userInfo
	});
})
//显示新增文章页面
router.get('/add',(req,res)=>{
	/*res.render('admin/article_add',{
		userInfo:req.userInfo
	});*/
	categoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		res.render('admin/article_add',{
			userInfo:req.userInfo,
			categories:categories
		});
	})
});

router.post('/add',(req,res)=>{
	let body = req.body;
	new articleModel({
		category:body.category,
		user:req.userInfo._id,
		title:body.title,
		intro:body.intro,
		content:body.content
	})
	.save()
	.then((article)=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'新增文章成功',
			url:'/article'
		})
	})
	.catch((err)=>{//新增失败,渲染错误页面
 		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'新增文章失败,数据库操作失败'
		})
	})
})

module.exports = router;