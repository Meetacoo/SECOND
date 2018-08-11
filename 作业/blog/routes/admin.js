const Router = require('express').Router;
const blogModel = require('../models/blog.js');
const pagination = require('../util/pagination.js');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const router = Router();

router.use((req,res,next)=>{
	if (req.userInfo.isAdmin) {
		next();
	}else{
		res.send('<h1>请用管理员账号登录</h1>');
	}
})
// 显示首页
router.get('/',(req,res)=>{
	// console.log(req.cookies.get('userInfo'));
	// console.log(req.userInfo);
	// res.send('admin');
	res.render('admin/index',{
		userInfo:req.userInfo
	});
})

/*router.get('/users',(req,res)=>{
	res.render('admin/userlist',{
		userInfo:req.userInfo
	});	
})*/
//显示用户列表
router.get('/users',(req,res)=>{
	// console.log(blogModel.find({},'_id username isAdmin'));
	/*blogModel.find()
	.then((users)=>{
		res.render('admin/userlist',{
			userInfo:req.userInfo,
			users:users
		});	
	})*/
//获取所有用户的信息,分配给模板
	//需要显示的页码
	/*let page = req.query.page || 1;
	if(page <= 0){
		page = 1;
	}
	//每页显示条数
	let limit = 2;
	
	// 分页:
	// 假设: 每页显示 2 条  
	// limit(2)
	// skip()//跳过多少条
	// 第 1 页 跳过 0 条
	// 第 2 页 跳过 2 条
	// 第 3 也 跳过 4 条
	// 综上发现规律:
	// (page - 1) * limit
	

	blogModel.estimatedDocumentCount({})
	.then((count)=>{
		let pages = Math.ceil(count / limit);
		if(page > pages){
			page = pages;
		}
		let list = [];

		for(let i = 1;i<=pages;i++){
			list.push(i);
		}
		
		let skip = (page - 1)*limit;

		blogModel.find({},'_id username isAdmin')
		.skip(skip)
		.limit(limit)
		.then((users)=>{
			res.render('admin/userlist',{
				userInfo:req.userInfo,
				users:users,
				page:page*1,
				list:list
			});			
		})
	})
*/
	let options = {
		page: req.query.page,
		model: blogModel,
		query :{},
		show: '_id username isAdmin',
		sort: {_id:1}
	}
	pagination(options)
	.then((data)=>{
		res.render('admin/userlist',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		});	 
	})
})

router.post('/uploadImages',upload.single('upload'),(req,res)=>{
	let path = "/uploads/"+req.file.filename;

	// console.log(path);
	res.json({
		uploaded:true,
		url:path
	})
})

module.exports = router;