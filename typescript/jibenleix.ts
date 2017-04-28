//boolean
var isboon:boolean=false;
console.log(isboon);//false
//number
var num:number=10;
console.log(num);//10
//string
var str:string='world';
console.log('hello '+str);//hello world
//arr
var list:number[]=[1,2,3];
var list2:Array<string>=['3','4','5'];
console.log(list+';'+list2);1,2,3;3,4,5
//枚举类型，限制在有限范围内
enum color {red=1,green=5,blue=10};//下标可以赋值操作{red=1,green=5,blue=8}
var col:string=color[5];
var c:color=color.green;//获取下标
console.log(c+','+col);//5,green
//any 不确定类型
var notsure:any=10;
notsure="hello";
var bb:any[]=[1,'xiaowang'];
console.log(notsure+','+bb);//hello,1,xiaowang
//void声明函数,不需要返回值
function say():void{
	
}
//基本类型 boolean.number.string.array.enum.any.void