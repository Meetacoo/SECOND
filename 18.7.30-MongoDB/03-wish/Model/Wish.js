const fs = require('fs');
const uuidv1 = require('uuid/v1');

const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'wishwall';

// const filePath = path.normalize(__dirname + '/../data/wish.json');
function getRandom(min,max){
	return Math.round(min + (max - min) * Math.random());
}

let getDB = (callback) => {
	MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		callback(db,client);
	})
}
let add = (options,callback)=>{
	/*fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj = JSON.parse(data);
			options.color = 'rgb(' + getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+ ')';
			options.id = uuidv1();
			obj.push(options);
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if (!err) {
					callback(null,options);
				} else {
					callback(err);
				}
			})
		} else {
			callback(err);
		}
	})*/

	getDB((db,client)=>{
		const col = db.collection('wish');
		options.color = 'rgb(' + getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+ ')';
		options._id = uuidv1();
		col.insertOne(options,function(err,result){
			if (!err) {
				callback(null,options);
			} else {
				callback(err);
			}
			client.close();
		})
	})
}

let get = (callback) => {
	/*fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj = JSON.parse(data);
			callback(null,obj);
		} else {
			callback(err);
		}
	});*/

	getDB((db,client)=>{
		const col = db.collection('wish');
		col.find({}).toArray(function(err,docs){
			if (!err) {
				callback(null,docs);
			} else {
				callback('err:::',err);
			}
			client.close();
		})
	})
}

let remove = (id,callback) => {
	/*fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj = JSON.parse(data);
			let result = null;
			let newObj = obj.filter((val)=>{
				return val['id'] != id;
			})
			let str = JSON.stringify(newObj);
			fs.writeFile(filePath,str,(err)=>{
				if (!err) {
					callback(null,newObj);
				} else {
					callback(err);
				}
			})
		} else {
			callback(err);
		}
	});*/
	getDB((db,client)=>{
		const col = db.collection('wish');
		
		col.deleteOne({_id:id},function(err){
			if (!err) {
				callback(null);
			} else {
				callback("err:::",err)
			}
			client.close();
		})
	})
}
module.exports = {
    get:get,
    add:add,
    remove:remove
}