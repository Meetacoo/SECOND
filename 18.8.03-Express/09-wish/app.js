const express = require('express');
const bodyParser = require('body-parser');
const swig = require('swig');
const mongoose = require('mongoose');

// 启动数据库
const app = express();
mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
})
db.once('open',()=>{
	console.log('db connected ok...');
})

// 2:配置模板
swig.setDefaults({
	cache: false
})
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');

// 3:配置静态资源
app.use(express.static('public'));


// 4:添加处理post请求的中间件
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// 5:处理路由
app.use('/',require('./routes/index.js'));
app.use('/wish',require('./routes/wish.js'));

app.listen(3000,()=>{
	console.log('running on 127.0.0.1:3000');
})