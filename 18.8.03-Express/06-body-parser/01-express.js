const express = require('express');
const userRouter = require('./routes/user.js')
const bodyParser = require('body-parser');


const app = express();

// 托管静态文件 ‘静态资源目录’
app.use(express.static('public'));
// app.use('/static',express.static('public'));

// app.use('虚拟路径',require(''))
// app.use('/user',require('./routes/user.js'));
// app.use('/blog',require('./routes/blog.js'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
/*app.post('/',(req,res)=>{
	let body = '';
	req.on('data',(chunk)=>{
		body += chunk;
	});
	req.on('end',()=>{
		console.log(body);
	})
	console.log('post data...')
});*/
app.post('/',(req,res)=>{
	console.log(req.body)//post数据
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000');
})