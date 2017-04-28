//类、继承、访问权限、封装、静态属性、进阶技巧
class Peoson{
	name:string;
	age:number;
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}
	print(){
	  return this.name+","+this.age;
	}
}
var p=new Peoson('wang',20);
console.log(p.print());//wang,20

class person{
	name:string;
	age:number;
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}
	tell(){
		return this.name+","+this.age; 
	}
}
class student extends person{
	school:string;
	constructor(school:string){
		super('john',10);
		this.school=school;
	}
	tell(){
		return this.name+","+this.age+","+this.school;
	}
}
var s=new student('jike');
console.log(s.tell());
//访问修饰符 public private(无法访问)
/**
 class pp{
	name:string;
	age:number;
	constructor(private name:string,age:number){
		this.name=name;
		this.age=age;
	}
	print(){
		return this.name+","+this.age;
	}
}
class teacher extends pp{
	school:string;
	constructor(name:string,age:number){
		this.school=school;
		super("lala",35);
	}
	print(){
		return this.name+","+this.age+","+this.school; 
	}
}
var t=new teacher('xuexiao');
console.log(t);//name 访问不到了
*/
//封装
class hello{
	private _age:number;
	print(){
		return this._age;
	}
	get age():number{
		return this._age;
	}
	set age(newage:number){
		if(newage>100 || newage<0){
			console.log('请正确填写年龄');
		}else{
			this._age=newage;
		}
	}
}
var h=new hello();
h.name=-10;
console.log(h.print());

//static 静态属性,需要通过类名调用
class pps{
	static name:string;
	print(){
		console.log('name:'+pps.name);
	}
}
var p=new pps();
pps.name='iwen';
console.log(p.print());
//进阶技巧
class greeter{
	greeter:string;
	constructor(message:string){
		this.greeter=message;
	}
	greet(){
		return 'hello'+this.greeter;
	}
}
var green:greeter;
green:new greeter("iwen");
console.log(green.greet())









