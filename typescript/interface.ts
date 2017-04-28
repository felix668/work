//了解接口、可选属性、函数类型、数组类型、class类型、继承接口、混合类型
function printlabels(labelobj:{label:string}){
	console.log(labelobj.label);
}
var myobj={label:'hello nomall'};
printlabels(myobj);

interface labelvaule{
	label:string;
}
function printlabel(labelobj:labelvaule){
	console.log(labelobj.label);
}
var myobj={ label:'hello interface'};
printlabel(myobj);
//可选属性
interface usb{
	name:string;
	age?:number;
}
function printusb(pu:usb){
	console.log(pu.name);
	//console.log(pu.age);
}
var my={name:'iem'};
printusb(my);
//函数类型,接口即可以描述对象也可描述函数类型，针对类型检查
interface funtype{
	(source:string,substring:string):boolean;
}
var myfun:funtype;
myfun=function(src:string,sub:string){
	var sesult=src.search(sub);
	if(sesult!=-1){
		return true;
	}else{
		return false;
	}
}
//数组类型,描述数组的类型,规范类型
interface stringArray{
	[index:number]:string;
}
var myarr:stringArray;
myarr=['iwen','ime'];
console.log(myarr[1]);
//class类型
interface clockinterface{
	currentTime:Date;
	setTime(d:Date);
}
class clock implements clockinterface{
	currentTime:Date;
	setTime(d:Date){
		this.currentTime=d;
	}
	constructor(h:number,m:number){

	}
}
//jiekou jicheng
interface shape{
	color:string;
}
interface penstroke{
	penWidth:number;
}
interface square extends shape,penWidth{
	sildeleng:number;
}
var s=<square>{};//注意是<>{},不是new关键字
s.color="blue";
s.sildeleng=10;
s.penWidth=100;
//混合类型
interface counter{
	interval:number;
	reset():void;
	(start:number):string;
}
var c:counter;
c.interval=10;






























