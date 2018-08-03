const http = require('http');
const url = require('url');
const util = require('util');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const mime = require('./mime.json');
var swig  = require('swig');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wishwall',{ useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
	throw err
})
db.once('open',()=>{
	console.log('db connected ok...');
})

const server = http.createServer((req,res)=>{
	console.log("req.url:::",req.url);
    let pathname = url.parse(req.url,true).pathname;
    //约定: 
	//1.请求路径以 /static/开始的都是静态资源
	//           /static/css/index.css
	//2.路由的请求格式: /Controller/action/arg1/arg2.....
	//				 /Wish/index/
	if (pathname.startsWith('/static/')) {
		let filePath = path.normalize(__dirname + pathname);
        let fileExtName = path.extname(filePath);
 
        fs.readFile(filePath,(err,data)=>{
            if(!err){
                let mimeType = mime[fileExtName] || 'text/plain';
                res.setHeader('Content-Type', mimeType+';charset=UTF-8');
                res.end(data);
            }else{
                res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                res.statusCode = 404;
                res.end('<h1>页面走丢了。。。</h1>')
            }
        });   
	} else {
		// 处理动态路由
		console.log('1:::',pathname);
		let paths = pathname.split('/');
		// console.log(paths);
		let controller = paths[1] || 'Wish';
		// console.log(controller);
		let action = paths[2] || 'index';
		let args = paths.slice(3);
		// console.log(args);//[]
		let model;
		try{
			model = require('./Controller/' + controller);
		}catch(err){
			console.log(err);
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>页面走丢了。。。</h1>');
			return;
		}
		// console.log(model[action]);
		if (model[action]) {
			model[action].apply(null,[req,res].concat(args));
		}
	}
    
});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:3000');
})