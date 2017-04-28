// var koa = require('koa');
// var app = koa();

// // app.use(function *(){
// //   this.body = 'Hello World';
// // });
// app.use(function *(){
// 	// res.end();
// 	// res.send();
// 	// res.json();
//   this.body = {
//   	name:'aaa'
//   };
// });

// app.listen(3000);
//iojs koa.js
//浏览器地址里输入localhost:3000

//中间件级联
// var koa = require('koa');
// var app = koa();

// // x-response-time

// app.use(function *(next){
//   var start = new Date;
//   yield next;
//   var ms = new Date - start;
//   this.set('X-Response-Time', ms + 'ms');
// });

// // logger

// app.use(function *(next){
//   var start = new Date;
//   yield next;
//   var ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// });

// // response

// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.listen(3000);
// app.listen(...)一个或多个Koa应用可以被挂载到一起组成一个包含单一 HTTP 服务器的大型应用群
//app.listen(3001);//多个端口http.createServer(app.callback()).listen(3001);

//app.callback()返回一个适合 http.createServer() 方法的回调函数用来处理请求。 您也可以使用这个回调函数将您的app挂载在 Connect/Express 应用上。
//app.use(function)为应用添加指定的中间件



//app.keys设置cookie秘钥，在进行cookie签名时，只有设置 signed 为 true 的时候，才会使用密钥进行加密：
//this.cookies.set('name', 'tobi', { signed: true });

// var koa = require('koa');
// var app = koa();

// // app.use(function *(){
// //   this.body = 'Hello World';
// // });
// app.keys = ['im a newer secret', 'i like turtle'];
// app.use(function *(){
// 	// res.end();
// 	// res.send();
// 	// res.json();
//   this.body = "hello koa";
//   this.cookies.set('name', 'tobi', { 
// 		signed: true 
//   });
// });


//错误处理默认情况下Koa会将所有错误信息输出到 stderr，除非 NODE_ENV 是 "test"。为了实现自定义错误处理逻辑（比如 centralized logging），您可以添加 "error" 事件监听器。
//app.on('error', function(err){
//   log.error('server error', err);
// });
// 如果错误发生在 请求/响应 环节，并且其不能够响应客户端时，Contenxt 实例也会被传递到 error 事件监听器的回调函数里
// 当发生错误但仍能够响应客户端时（比如没有数据写到socket中），Koa会返回一个500错误(Internal Server Error)。

//无论哪种情况，Koa都会生成一个应用级别的错误信息，以便实现日志记录等目的。
//日志分析，log4js管理日志



//context上下文，Koa Context 将 node 的 request 和 response 对象封装在一个单独的对象里面
//ctx.req Node 的 request 对象。
//ctx.res Node 的 response 对象
//ctx.request Koa 的 Request 对象
//ctx.response  Koa 的 Response 对象
//ctx.app 应用实例引用
//ctx.cookies.get(name, [options]) 获得 cookie 中名为 name 的值，options 为可选参数:'signed': 如果为 true，表示请求时 cookie 需要进行签名
//ctx.throw(msg, [status])抛出包含 .status 属性的错误，默认为 500,
//this.throw('name required', 400) 等价于
//var err = new Error('name required');
// err.status = 400;
// throw err;
// 
// Request aliases和Response aliases
// cxt.query使用this.query
var koa = require('koa');
var app = koa();
// app.keys = ['im a newer secret', 'i like turtle'];
// app.use(function *(){
// 	//this.throw(404,'name required');//在输出之前
//   this.body = 'Hello World';
//   //console.log(this);//控制台可以看到this
//   //console.log(this.request.url);//localhost:3000/?name=5//控制台打印了参数
//   //console.log(this.query);//{}
//   console.log(this.ip);//::1
//   //   this.cookies.set('name', 'tobi', { 
// // 		signed: true 
// //   });
// 	//ctx.cookies.get('name');//ctx is not defined
// 	//console.log(this.cookies.get('name'));//打印了name的值tobi
// });




//请求(Request):Koa Request 对象是对 node 的 request 进一步抽象和封装，提供了日常 HTTP 服务器开发中一些有用的功能,
//响应(Response) Koa Response 对象是对 node 的 response 进一步抽象和封装，提供了日常 HTTP 服务器开发中一些有用的功能。
//http://koa.bootcss.com/ 查看api
// app.use(function *(){//requuest
// 	var controller=this.request.path;
// 	if(controller=="/test/" || controller=="/test"){ //localhost:3000/test  {test:'ok'}
// 		this.body={
// 			test:"ok"  
// 		}
// 	}else if(controller=="/index" || controller=="/index/"){
// 		this.body = 'Hello World';//localhost:3000/  hello world
// 		console.log(this.request.query);//localhost:3000/index?name=aaa&pass=123 控制台打印{name='aaa',pass='123'}
// 	}else{
// 		this.throw(404,'当前内容并未找到～');
// 	}
//    //console.log(this.request.path)
// });

// app.use(function *(){//response
// 	var controller=this.request.path;
// 	if(controller=="/test/" || controller=="/test"){ //localhost:3000/test  {test:'ok'}
// 		this.body={
// 			test:"ok"  
// 		}
// 	}else if(controller=="/index" || controller=="/index/"){
// 		this.body = 'Hello World';//localhost:3000/  hello world
// 		console.log(this.request.query);//localhost:3000/index?name=aaa&pass=123 控制台打印{name='aaa',pass='123'}
// 	}else{
// 		this.throw(404,'当前内容并未找到～');
// 	}
//    //console.log(this.request.path)
// });

// // 
// app.listen(3000);
































































































