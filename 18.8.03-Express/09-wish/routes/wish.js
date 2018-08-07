const Router = require('express').Router;
const wishModel = require('../models/wish.js')


const router = Router();

function getRandom(min,max){
	return Math.round(min + (max - min) * Math.random());
}
// 增加愿望
router.post('',(req,res)=>{
	// console.log(req.body);
	let obj = req.body;
	obj.color = 'rgb(' + getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+ ')';
	wishModel.insertMany(obj,(err,docs)=>{
		let result = {};
		if (!err) {
			// 3.返回结果到前端
			result = {
				status:0, // 成功
				data:docs[0]
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


// 删除愿望
router.delete('/:id',(req,res)=>{
	// console.log(req.params.id);
	let id = req.params.id;
	wishModel.remove({_id:id},(err,data)=>{
		let result = {};
		if (!err) {
			result = {
				status:0
			}
			let resultJson = JSON.stringify(result);
			res.end(resultJson);
		}
	})
})


module.exports = router;