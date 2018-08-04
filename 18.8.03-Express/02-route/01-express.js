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