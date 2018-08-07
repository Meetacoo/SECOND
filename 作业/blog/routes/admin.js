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
	res.render('admin/admin');
})

module.exports = router;