//变量提升
// if(!("username" in window)){
//    var username='xiaowang';
// }
// console.log(username);//undefined
// 
// 作用域
// var obj={
// 	user:'xiaowang',
// 	getname:function(){
// 		return this.user;
// 	}
// 	
// }
// var getnameFn=obj.getname;
// console.log(getnameFn());//undefined
// console.log(obj.getname());//xiaowang

//作用域：访问变量的层级
//全局变量 global 
//函数作用域 function fn(){ var inner=2; global b=3;｝b全局变量，外部可以访问
//
//块级作用域 let const
//
//作用域链  函数也是对象，拥有可以通过代码访问的属性和一系列仅供js引擎访问的内部属性，其中一个内部属性是[[scope]],该内部属性包含了函数被创建的作用域中对象的集合，这个集合的被称为函数的作用域链，它决定了哪些数据能被函数访问
//var test='a';
//function do(){
//	alert(test);//undefined
//	var test='b';
//	alert(test);//b
//}
//foo();
//alert(test);//a
//
//this关键字，函数执行时的当前对象，谁调指谁
//使用场景： 严格模式 undefined 非严格模式  全局对象window，构造函数中对象的实例，对象方法指对象本身
//使用方法 :1.fn.cal(context,arg1,arg2,...argn);2.fn.apply(context,[arg1,arg2,...argn]);3.function(){}.bind(context);通过这三个方法可以改变被调用函数中this指向的对象
//
//原型对象prototype和原型链:每定义一个对象（函数）时，对象中都会包含一个原型对象prototype，普通对象没有prototype属性，但有_proto_原型指针指向父类的prototype，原型对象都有一个constructor
//function fn(){}
//var p=new fn;
//p._proto_==fn.prototype;//true
//console.log(typeof f1.prototype)//object
//console.log(typeof Function.prototype);//Function 这个特殊
//console.log(typeof Object.prototype);//object
//console.log(typeof Function.prototype.prototype);//undefinde
//fn.prototype.constructor===fn;//true
//Function.prototype.constructor===Function;//true
//Object.prototype.constructor===Object;//true
//Object.constructor===Function;//true
//
//面向对象开发 、类的继承:使用new关键字调用的函数就是构造函数，返回值，默认返回类的实例；特殊情况：没有返回值和简单数据类型都返回类的实例，返回复杂类型就是对象类型
//
// function p(name){//会有一个prototype属性
// 	this.name=name;
// }
// p.prototype.getname=function(){
// 	return this.name;
// };
// var fn=new p('zhangsan');//p有两个属性name和_proto_属性
// fn.getname();//zhangsan

//闭包练习,闭包是一个作用域，function循环要取到i，会在for循环里生成一个函数把i保存下来，这个函数是局部作用域
//内存释放不掉称为内存泄漏，代码不当早成内存泄漏
function mark(num){
	return function(){
		return num;
	}
}
var arr=[mark(0),mark(1),mark(2)];
console.log(arr[0]());//0
console.log(arr[1]());//1
console.log(arr[2]());//2

var name='global';
function a(name){//参数也是变量声明，不要在重复声明
	console.log(name);
	this.name=name;
	var name='1';//局部又声明了，优先级是先参数声明在局部声明，不要在闭包能重复声明变量
}
a.prototype.name='2';
var a=new a('3');
console.log(a.name);//3优先访问实例的属性
delete a.name;//删除实例上的属性
console.log(a.name);//2实例上的属性删除了，只能访问原型对象上的属性了

function fun(n,o){
	console.log(o);
	return {
		fun:function(m){
			return fun(m,n);
		}
	}
}
var a=fun(0);//undefined
a.fun(1);//0
a.fun(2);//0
var b=fun(0).fun(1).fun(2).fun(3);//0 1 2
var c=fun(0).fun(1);//undefined 0 
c.fun(2);//1
c.fun(3);//1
//作用域链、值传递和引用传递










