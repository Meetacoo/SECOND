/*var express = require('express');
var router = express.Router();*/
const Router = require('express').Router;
const router = Router();
// 定义网站主页的路由
router.get('/', (req, res) => {
	res.send('get blog data...');
});
router.post('/', function(req, res) {
	res.send('add blog data');
});
router.put('/', function(req, res) {
	res.send('edit blog data');
});
router.delete('/', function(req, res) {
	console.log(req.params.id);
	res.send('delete blog data');
});

module.exports = router;