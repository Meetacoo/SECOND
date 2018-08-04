const http = require('http');
function express(){
	let fns = [];
	let app = (req,res)=>{
		let i = 0;
		function next(){
			let fn = fns[i++];
			if (!fn) {
				return;
			}
			fn(req,res,next);
		}
		next();
	};
	app.use = (fn) =>{
		fns.push(fn);
	};
	/*app.get = (fn) =>{
		fns.push(fn);
	}*/
	
	return app;
}

let app = express();

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
	res.end('ghaf');
});
/*app.get('/',(req,res)=>{
	res.send('<h1>Hello World</h1>');
})*/
var server = http.createServer(app);

server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000');
})