const express = require('express');
const app = express();
const mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_test'
});
app.use(express.static('public'));
//配置swig
var swig = require('swig');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
//配置路由
app.get('/', function (req, res,next) {
  res.render('index',{
  	title:'第一个express小程序'
  });
});
app.get('/receive', function (req, res,next) {
	console.log("前台发来数据："+req.query.username);//输出了前台提交数据
	let post={
		username:req.query.username
	};
	connection.connect();
	//"UPDATE `t` SET `username`='"+req.query.username+"' WHERE `id`=1"
	//INSERT INTO `t`(`username`) VALUES ()
	var query=connection.query('INSERT INTO t SET ?',post, function (error, results, fields) {
		if (error) {
			res.json({
				sucess:'no',
				mss:"插入失败"
			});
		}else{
			res.json({
				sucess:'ok',
				mss:"插入成功"
			});
		}
		
	});
	connection.end();
});
/*容错机制*/
app.get("*",function(req,res,next){
	res.status("404");
	res.end("404")
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000,function(){
	console.log('server running on 3000');
});






