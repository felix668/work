//帮助我们从后台拿到数据，通过node展现在页面上
var express=require("express");
var app=express();
var swig=require('swig');
app.set("view engine",'html');
app.engine('heml',swig.renderFile);
app.use(express.static('public'));
app.get('/',function(req,res,next){
	res.render('index',{
		title:'测试首页',
		date:'hello express'
	})
});
app.listen(8002,function(){
	console.log("接口已启动");
});
//node 启动服务
//npm install swig --save
//