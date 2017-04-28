//泛型、使用泛型、泛型类型、泛型类
//function hello(num:number):number{
//	return num;//明确规范传一个number类型，返回值number类型
//}
//function hello(str:any):any{
//	return str;//早成类型混乱
//}
//泛型在使用时指定类型
function hello1(arg) {
    return arg;
}
var out = hello1('fanxing');
console.log(out);
//泛型根据传递类型决定属性
function hello2(str) {
    console.log(str.length);
    return str;
}
var list = hello2(['1', '2', '3']);
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
//泛型类型
function hh(str) {
    return str;
}
var myh = hh;
console.log(myh('lambda'));
//lambda匿名函数
var fun = function (a) {
    return "hello" + a;
};
console.log(fun(2));
function myhel(arg) {
    return arg;
}
var mh = myhel;
console.log(mh(10));
//泛型类
