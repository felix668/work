//函数柯里化（curry）的定义很简单：传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

//es5写法
var add=function(x){
	return function(y){
		return x+y;
	};
};
var dd=add(2);
dd(2);//4
dd(8);//10

//es6写法
var add=x=>(y=>x+y);
//

//函数组合
var compose=function(f,g){
	return function(x){
		return f(g(x));
	}
};
//
var compose=(f,g)=>(x=>f(g(x)));
var add1=x=>x+1;
var mul5=x=>x*5;
compose(mul5,add1)(2);//15
// /我们定义的compose就像双面胶一样，可以把任何两个纯函数结合到一起。当然你也可以扩展出组合三个函数的“三面胶”，甚至“四面胶”“N面胶”
// 
var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = compose(first, reverse);
last([1,2,3,4,5]);