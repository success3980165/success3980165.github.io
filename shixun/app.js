var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
var addData = require("./modules/checkout")
// var checkUser2 = require("./modules/checkUser")


		
	app.post("/text",function(req,res){
	fs.readFile("data/name.json","utf8",function(err,data){
	var userList = JSON.parse(data);
		for(var i in userList){
			if(req.body.username==userList[i].username){
				res.send(true);
				return;
			}
		}
		res.send(false);
	})
})


		
	app.post("/text1",function(req,res){
	fs.readFile("data/name.json","utf8",function(err,data){
	var userList = JSON.parse(data);
		for(var i in userList){
			if( req.body.password==userList[i].password){
				res.send(true);
				return;
			}
		}
		res.send(false);
	})
})


app.post("/adduser",function(req,res){
	console.log(req.body)
	addData("data/name.json",req.body);
	res.redirect("/");
})

// app.get("/",function(req,res){
// 	res.render("zhuye",{tit:"添加用户"})
// });




app.post("/",function(req,res){
	fs.readFile("data/name.json","utf8",function(err,data){
		var userList = JSON.parse(data);
		for(var i in userList){
			if( req.body.password==userList[i].password && req.body.username==userList[i].username){
				res.render("gerenzhongxin");
				return;
			}
		}
		res.redirect("/");
	})
})





app.listen(3000);
console.log("服务器成功启动！")


