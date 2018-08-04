const express = require('express');
// const userRouter = require('./routes/user.js')


const app = express();

// 托管静态文件 ‘静态资源目录’
app.use(express.static('public'));
// 如果加上虚拟路径的话，就必须在输入网址时在根目录的请求下再输入 /虚拟路径
// app.use('/biubiubiu',express.static('public'));

// app.use('虚拟路径',require(''))
// 任何以虚拟路径开头的路由请求都会转到 require 里的路由
// app.use('/user',require('./routes/user.js'));
// app.use('/blog',req uire('./routes/blog.js'));
app.use(function (req, res, next) {
	console.log('A');
	next();
	console.log('a')
});
app.use(function (req, res, next) {
	console.log('B');
	next();
	console.log('b')
});
app.use(function (req, res, next) {
	console.log('C');
	next();
	console.log('c')
});
app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})