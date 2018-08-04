const express = require('express');
// const userRouter = require('./routes/user.js')


const app = express();

// 托管静态文件 ‘静态资源目录’
app.use(express.static('public'));
// app.use('/static',express.static('public'));

// app.use('虚拟路径',require(''))
app.use('/user',require('./routes/user.js'));
app.use('/blog',require('./routes/blog.js'));

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})