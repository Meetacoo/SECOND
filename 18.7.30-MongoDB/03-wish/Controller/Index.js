class Index{
	index(req,res,...args){
		res.end('index page');
	}
}

module.exports = new Index();