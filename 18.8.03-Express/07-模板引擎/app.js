const express = require('express');
const swig = require('swig');

const app = express();

app.use(express.static('public'));
swig.setDefaults({
	cache: false
})
//1. 配置应用模板 
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile);

//2.配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views');

//3.注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html');

app.get('/data',(req,res)=>{
	//4.渲染模板
	//第一个参数是相对于模板目录的文件
	//第二个参数是传递给模板的数据
	res.render('data',{
		title:'跨猪网',
		content:'我是内容',
		obj:{
			name:"Meta",
			age:21
		},
		name:"Baby",
		arr:["Meta","Laura","Penney","Baby"]
	})
})
app.get('/',(req,res)=>{
	res.render('index')
})
app.get('/list',(req,res)=>{
	res.render('list')
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})