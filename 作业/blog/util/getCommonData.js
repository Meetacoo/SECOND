const categoryModel = require('../models/category.js');
const articleModel = require('../models/article.js');
/*
获取前台共通数据
*/
let getCommonData = ()=>{

	return new Promise((resolve,reject)=>{
		categoryModel.find({},'_id name')
		.sort({order:1})
		.then(categories=>{
			articleModel.find({},'_id title click')
			.sort({click:-1})
			.limit(10)
			.then(topArticles=>{
				resolve({
					categories:categories,
					topArticles:topArticles
				})
			})
		})
	});
}

module.exports = getCommonData;