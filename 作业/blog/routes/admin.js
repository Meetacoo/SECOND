const Router = require('express').Router;
const blogModel = require('../models/blog.js');

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
	res.render('admin/admin',{
		userInfo:req.userInfo
	});
})

// 退出
router.get('/logout',(req,res)=>{
	let result = {
		code:0,
		massage:''
	}
	// req.cookies.set('userInfo',null);
	req.session.destroy();
	res.json(result);
})


router.get('/',(req,res)=>{
	res.render('admin/userlist')
})

module.exports = router;