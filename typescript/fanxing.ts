//泛型、使用泛型、泛型类型、泛型类
//function hello(num:number):number{
//	return num;//明确规范传一个number类型，返回值number类型
//}
//function hello(str:any):any{
//	return str;//早成类型混乱
//}
//泛型在使用时指定类型
function hello1<T>(arg:T):T{
	return arg;
}
var out=hello1<string>('fanxing');
console.log(out);
//泛型根据传递类型决定属性
function hello2<T>(str:T[]):T[]{
	console.log(str.length);
	return str
}
var list:Array<string>=hello2<string>(['1','2','3']);
for(var i=0;i<list.length;i++){
	console.log(list[i]);
}
//泛型类型
function hh<t>(str:t):t{
	return str;
}
var myh:<k>(arg:k)=>k=hh;
console.log(myh('lambda'));
//lambda匿名函数
var fun:(a:number)=>string=function(a:number):string{
	return "hello"+a;
}
console.log(fun(2));

interface hel<T>{
	(arg:T):T;
}
function myhel<T>(arg:T):T{
	return arg;
}
var mh:hel<number>=myhel;
console.log(mh(10));
//泛型类
class hew<T>{
	zero:T;
	add:(x:T,y:T)=>T;
}
var myhel=new hew<number>();
myhel.zero=10;
myhel.add=function(x,y){
	return x+y;
}
console.log(myhel.add(10,10));

