class index{
	construct{

	},
	bind{

	}
}
exports default index;
(function(){alert(1)})()
(function(){alert(2)})()
//Uncaught TypeError: (intermediate value)(...) is not a function at <anonymous>:2:1
//es6需要工具编译
//
// var index=function(){
// 	this.res=30;
// }
// index.prototype.test=function(){
// 	this.res++;
// }
// 
// var index={
// 	init:function(){
// 		this.res=30;
// 	},
// 	render:function(){//绑定
// 		var me=this;
// 		me.btn＝$("#btn1");
// 	},//es5控制this,涉及缓存this的问题
// 	bind:function(){//触发
// 		var me=this;
// 		me.btn.cilck=$.proxy(me._test);//proxy代理
// 	},
// 	_test:function(){
// 		this.res++;
// 	}
// }
module.exports=index;
//6、模块化，1.index js设计模式的一个，单例，2、init任何插件都是先执行init;3、this；4、私有变量_；5、res++;分号良好的编程风格

//闭包