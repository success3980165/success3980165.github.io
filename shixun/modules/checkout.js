
var fs = require("fs");
// function checkUser1(opi,next){
// 	fs.readFile("data/name.json","utf8",function(err,data){
// 		var list = JSON.parse(data)
// 		for(var i in list){
// 		if(opi.username ==list[i].username){  //异步回调函数（注册方法）,判断			
// 			next(true);
// 			return;
// 			}
// 		}
// 		next(false);
// 	})
// }

// function checkUser2(opi,next){
// 	fs.readFile("data/name.json","utf8",function(err,data){
// 		var list = JSON.parse(data)
// 		for(var i in list){
// 		if(opi.password == list[i].password){  //异步回调函数（注册方法）,判断			
// 			next(true);
// 			return;
// 			}
// 		}
// 		next(false);
// 	})
// }


function addData(opi,option){
	fs.readFile(opi,"utf8",function(err,data){
		var list = option;
		var userlist = JSON.parse(data);
		userlist.push(list);
		var jsonSrting =JSON.stringify(userlist,null,4);
		fs.writeFile(opi,jsonSrting);
		console.log("数据添加成功！");
	})
}

module.exports = addData;

