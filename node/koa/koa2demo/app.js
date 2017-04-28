const koa=require('koa');
const router=require("koa-simple-router");
const app= new koa();
//staic
const convert = require('koa-convert');
const server =require('koa-static');
const path=require("path");
//moben
const render=require('koa-swig');
const co=require('co');
//入门级
//response
// app.use(ctx=>{
// 	ctx.body="hello world";
// })

//app.use(convert(server(config.staticDir)));
app.use(convert(server(path.join(__dirname,'./public'))));

app.context.render = co.wrap(render({
	root: path.join(__dirname, './views'),
	autoescape: true,
	cache: 'memory', // disable, set to false
	ext: 'html',
	writeBody:false
}));
//router
//app.use(async ctx => ctx.body = await ctx.render('index'));
app.use(router(_=>{
	_.get('/',(ctx,next)=>{
		ctx.body="hello";
	})
	_.get('/index',async(ctx,next)=>{
		ctx.body=await ctx.render('index');
	})
}));

 app.listen(3000,()=>{
	console.log("sever started");
})