const wish = require('../Model/Wish.js');
const swig = require('swig');
const querystring = require('querystring');

class Wish{
	index(req,res,...args){
		wish.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});
	};
	
	add(req,res,...args){
		// 1.获取前端参数
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			// 2.存储到文件
			wish.add(obj,(err,data)=>{
				let result = {};
				if (!err) {
					// 3.返回结果到前端
					result = {
						status:0, // 成功
						data:data
					}
				} else {
					result = {
						status:10, // 失败
						message:'错了。。'
					}
				}
				let resultJson = JSON.stringify(result);
				res.end(resultJson);
			})
		})
	};

	del(req,res,...args){
		wish.remove(args[0],(err,data)=>{
			let result = {};
			if (!err) {
				result = {
					status:0
				}
			}
			let resultJson = JSON.stringify(result);
			res.end(resultJson);
		})
	}
};

module.exports = new Wish();