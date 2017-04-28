class a{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
}
class b extends a{
	constructor(language){
		super('wang',18);
		this.language=language;
	}
	fn(){
		return this.name+this.age+this.language;
	}
}
var p=new b('zhang',28,'china');
console.log(p.fn());

// let x=1;
// let y=2;
// console.log(`${x} + ${y} = ${x + y}`);//1 + 2 = 3

// function add(...values){
// 			let sum=0;
// 			for(var val of values){
// 				sum+=val;
// 			}
// 		}
// 		var p=new add(1,2,3);
// 		console.log(p);

		