const Koa = require('koa');
const app = new Koa();
 
// x-response-time

app.use(function *(next){
  var start = new Date;
  console.log("1");
  yield next;
  var ms = new Date - start;
  console.log("2");
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  console.log("3");
  yield next;
  var ms = new Date - start;
  console.log("4");
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
	console.log("5");
  this.body = 'Hello koa';
   console.log("6");
});

app.listen(3000);
//控制台
// 1
// 3
// 5
// 6
// 4
// GET / - 3
// 2