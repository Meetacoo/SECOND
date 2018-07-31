const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);
const url = 'mongodb://localhost:27017';
// 指定数据库
// const dbName = 'myproject';
const dbName = 'marry';
MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {
	console.log("Connected successfully to server");

	const db = client.db(dbName);
	// console.log(db);
	// 自动关闭
	// client.close();

	const col = db.collection('wish');
	/*// 插入
	col.insertMany([{name:"易烊千玺"},{name:"黄金芳"}],function(err,docs){
		if (!err) {
			console.log(docs);
		} else {
			console.log('err:::',err);
		}
		client.close();
	})*/

	/*// 查找
	col.find({}).toArray(function(err,docs){
		if (!err) {
			console.log(docs);
		} else {
			console.log('err:::',err);
		}
		client.close();
	})
	col.find({"name":"易烊千玺"}).toArray(function(err,docs){
		if (!err) {
			console.log(docs);
		} else {
			console.log('err:::',err);
		}
		client.close();
	})*/

	/*// 更新
	col.update({"name":"易烊千玺"},{$set:{age:18}},function(err,result){
		if (!err) {
			// console.log(result);
			console.log(result.result);
		} else {
			console.log('err:::',err);
		}
		client.close();
	})*/

	// 删除
	col.deleteOne({name:'黄金芳'},function(err,result){
		if (!err) {
			console.log(result.result);
		} else {
			console.log("err:::",err)
		}
		client.close();
	})
});