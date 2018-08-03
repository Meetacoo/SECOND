const express = require('express');
// console.log(express);
let app = express();
// console.log(app);
app.get('/', function(req, res){
  res.send('<h1>Hello World</h1>');
});

app.listen(3000,'127.0.0.1',()=>{
	console.log('running on server 127.0.0.1:3000');
})