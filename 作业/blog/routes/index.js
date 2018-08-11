const Router = require('express').Router;
const blogModel = require('../models/blog.js');
const catetoryModel = require('../models/category.js')
const articleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
const getCommonData = require('../util/getCommonData.js');

const router = Router();

// 显示首页
router.get('/',(req,res)=>{
	// console.log(req.cookies.get('userInfo'));
	// console.log(req.userInfo);
/*res.render('main/index',{
	userInfo:req.userInfo
});*/
	/*catetoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		let options = {
			page: req.query.page,//需要显示的页码
			model:articleModel, //操作的数据模型
			query:{}, //查询条件
			// projection:'-__v', //投影
			sort:{_id:-1}, //排序
			populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
		}

		pagination(options)
		.then((data)=>{
			// console.log("index:::",data);
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:data.users,
				page:data.page,
				list:data.list,
				pages:data.pages,
				categories:categories,
				url:'/articles'
			});	
		})		
	});*/
	articleModel.getPaginationArticles(req)
	.then(pageData=>{
		getCommonData()
		.then(data=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				url:'/articles'
			});				
		})
	})
})

//ajax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
	let options = {
		page: req.query.page,//需要显示的页码
		model:articleModel, //操作的数据模型
		query:{}, //查询条件
		projection:'-__v', //投影，
		sort:{_id:-1}, //排序
		populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
	}

	// console.log('req.query.category:::',req.query.category);
	let category = req.query.category
	let query = {}
	if (category) {
		query.category = category
	}
	// console.log(query);
	pagination(options)
	.then((data)=>{
		res.json({
			code:'0',
			data:data
		})
	})
});

router.get("/view/:id",(req,res)=>{
	// let body = req.body;
	let id = req.params.id;
	// console.log(id);
	// console.log(body);
	articleModel.findByIdAndUpdate(id,{$inc:{click:1}})
	.populate('category','name')
	.then((article)=>{
		// console.log("article",article);
		getCommonData()
		.then(data=>{
			// console.log(data);
			res.render('main/detail',{
				userInfo:req.userInfo,
				article:article,
				categories:data.categories,
				topArticles:data.topArticles,
				category:article.category._id.toString()
			})			
		})		
	})
})

router.get("/list/:id",(req,res)=>{
	let id = req.params.id;
	// console.log(id);
	articleModel.getPaginationArticles(req,{category:id})
	.then((pageData)=>{
		// console.log(pageData)
		getCommonData()
		.then(data=>{
			// console.log('data:::',data);
			res.render('main/list',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				category:id,
				url:'/list'
			})		
		})		
	})
})

module.exports = router;