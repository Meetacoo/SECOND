const express = require('express');
// console.log(express);
let app = express();
// console.log(app);
app.get('/', function(req, res){
	res.send('get data ...');
});
// get('/路径')
app.get('/abc', function(req, res){
	res.send('get abc data ...');
});
// 匹配acd 和 abcd
/*app.get('/ab?cd', function(req, res){
	res.send('get ab?cd data ...');
});*/
// 匹配abcd 和 abbcd / abbbcd 等...
/*app.get('/ab+cd', function(req, res){
	res.send('get ab+cd data ...');
});*/
// 匹配abcd 和 abxcd / abRABDOCMcd / ab123cd 等...
// 只要结尾是 cd 就行
app.get('/ab*cd', function(req, res){
	res.send('get ab*cd data ...');
});
// 匹配abe 和 abcde
app.get('/ab(cd)?e', function(req, res){
	res.send('get ab(cd)?e data ...');
});
app.post('/', function(req, res){
	res.send('post data ...');
});
app.put('/', function(req, res){
	res.send('put data ...');
});
app.delete('/', function(req, res){
	res.send('delete data ...');
});

// 注意： 
app.use(express.static('public'));

app.listen(3000,'127.0.0.1',()=>{
	console.log('running on server 127.0.0.1:3000');
})