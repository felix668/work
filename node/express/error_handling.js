//错误处理，404（页面找不到）、500（后台出错）这是两种常见的错误处理
// app.use() 和路由调用后，最后定义错误处理中间件
app.use(function(err,req,res,next){
	console.log(err.stack);
	next();
})

//为了便于组织（更高级的框架），您可能会像定义常规中间件一样，定义多个错误处理中间件。比如您想为使用 XHR 的请求定义一个，还想为没有使用的定义一个，那么：
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
//logErrors 将请求和错误信息写入标准错误输出、日志或类似服务
function logErrors(err, req, res, next) {
  console.error('记录日志'+err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
app.get('/a_route_behind_paywall', 
  function checkIfPaidSubscriber(req, res, next) {
    if(!req.user.hasPaid) { 
    
      // 继续处理该请求
      next('route');
    }
  }, function getPaidContent(req, res, next) {
    PaidContent.find(function(err, doc) {
      if(err) return next(err);
      res.json(doc);
    });
  });
//在这个例子中，句柄 getPaidContent 会被跳过，但 app 中为 /a_route_behind_paywall 定义的其他句柄则会继续执行
//
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  //如果你向 next() 传递了一个 error ，而你并没有在错误处理句柄中处理这个 error，Express 内置的缺省错误处理句柄就是最后兜底的
  //添加了一个自定义的错误处理句柄后，如果已经向客户端发送包头信息了，你还可以将错误处理交给 Express 内置的错误处理机制
  res.status(500);
  res.render('error', { error: err });
}
app.listen(8001,function(){
	console.log("接口已启动");
})


//404
module.exports=function(template){
	return function fileNotFound(req,res,next){
		var model={url:req.url,statusCode:404};
		if(req.xhr){
			res.send(404,model);
		}else{
			res.status(404);
			res.send(template,req.data);
		}
	}
}
//日志书写库
// log4js
// express-log
























































































