//类的定义

   //方法一：类的一般定义方法
	function player1(_name){
		this.name=_name;
		this.say=function(){
			console.log(this.name);
		};
	}
	var p1=new player1("xiaowang");
	p1.say();//xiaowang

	//方法二：prototype定义方法
	var player2=function(){};
	player2.prototype={
		name:'',
		say:function(){
			console.log(this.name);
		}
	};
	var p2=new player2();
	p2.name="xiaozhang";
	p2.say();//xiaozhang

	//方法三：上面的方法结构美观，便捷，但构建函数不能带参数，修改方法
	var player3=function(){
		this.init.apply(this,arguments);
	};
	player3.prototype={
		init:function(_name){
			this.name=_name;
		},
		say:function(){
			console.log(this.name);
		}
	};
	var p3 = new player3('llinzzi3'); 
	p3.say();//llinzzi3

//类的继承
	//方法一
	var player4=function(){
		this.init.apply(this,arguments);
	};
	player4.prototype=new player3();
	player4.prototype.shout=function(){
		console.log(this.name.toUpperCase());
	};
	var p4 = new player4('llinzzi4'); 
	p4.shout();//LLINZZI4


	//方法二 上面的方法不能采用{}的方法，修改方法 
	Object.extend=function(destination,source){
		for (var property in source) 
			destination[property] = source[property]; 
		return destination; 
	};
	var player5=function(){
		this.init.apply(this,arguments);
	};
	Object.extend(Object.extend(player5.prototype,player3.prototype),{ 
		shout:function(){ 
			console.log(this.name);
		}
	});
	var p5 = new player5('llinzzi5'); 
	p5.shout();//

//最基本的面向对象
	//字面式 (literal notation) 对象声明
	var person = {   
            name: "张三",   
            age: 26,   
            gender: "男",   
            eat: function(stuff ) {   
                    console.log( "我在吃" + stuff );   
                 }   
        };   
    person.height = 176;   
    delete person[ "age" ];
    console.log(person.eat('ege'));

    //使用构造器 (constructor) 创建对象
        // 构造器 Person 本身是一个函数对象   
        function Person() {   
            // 此处可做一些初始化工作   
        }  
        // 它有一个名叫 prototype 的属性  
        Person.prototype = {   
            name: "张三",   
            age: 26,   
            gender: "男",   
            eat:function( stuff ) {   
                alert( "我在吃" + stuff );   
            }   
        }   
        // 使用 new 关键字构造对象   
        var p = new Person();

//彻底理解原型链 (prototype chain)

	//对象的 __proto__ 属性和隐式引用
		function Person2( name ) {   
            this.name = name;   
        }   
        var p = new Person2();   
        // 对象的隐式引用指向了构造器的 prototype 属性，所以此处打印 true   
        console.log( p.__proto__ === Person2.prototype );   
        // 原型本身是一个 Object 对象，所以他的隐式引用指向了  
        // Object 构造器的 prototype 属性 , 故而打印 true   
        console.log( Person2.prototype.__proto__ === Object.prototype );   
        // 构造器 Person 本身是一个函数对象，所以此处打印 true  
        console.log( Person2.__proto__ === Function.prototype );//true

    //利用原型链 Horse->Mammal->Animal 实现继承
    	//声明 Animal 对象构造器
        function Animal(){};
        // 将Animal 的 prototype 属性指向一个对象，   
        // 亦可直接理解为指定 Animal 对象的原型
        Animal.prototype={
        	name:'animal',
        	weight:0,
        	eat:function(){
        		console.log(this.name+','+this.weight);
        	}
        };
        //声明 Mammal 对象构造器
        function Mammal(){
        	this.name="mammal";
        };
        Mammal.prototype=new Animal();
        //声明horse对象构造器
        function Horse(height,weight){
        	this.name='horse';
        	this.height=height;
        	this.weight=weight;
        };
        Horse.prototype=new Mammal();
        Horse.prototype.eat=function(){
        	console.log(this.name+','+this.height+','+this.weight);
        };
        var horse=new Horse(100,200);
        horse.eat();//horse,100,200
        console.log( horse.__proto__ === Horse.prototype );   
        console.log( Horse.prototype.__proto__ === Mammal.prototype );   
        console.log( Mammal.prototype.__proto__ === Animal.prototype ); 

	//使用 Simple Inheritance 实现类式继承
	// 声明 Person 类 
	    // var Class=function(){};  
     //    var Person = Class.extend( {  // Class.extend is not a function
     //        _issleeping: true,   
     //        init: function( name ) { this._name = name; },   
     //        isSleeping: function() { return this._issleeping; } }   
     //    );   
     //    // 声明 Programmer 类，并继承 Person   
     //    var Programmer = Person.extend( {  
     //        init: function( name, issleeping ) {   
     //            // 调用父类构造函数   
     //            this._super( name );   
     //            // 设置自己的状态  
     //            this._issleeping = issleeping;   
     //        }   
     //    });   
     //    var person = new Person( "张三" );   
     //    var diors = new Programmer( "张江男", false );   
     //    // 打印 true   
     //    console.log( person.isSleeping() );   
     //    // 打印 false  
     //    console.log( diors.isSleeping() );   
     //    // 此处全为 true，故打印 true   
     //    console.log( person instanceof Person && person instanceof Class && diors instanceof Programmer &&  
     //    diors instanceof Person && diors instanceof Class ); 

	// 使用闭包实现信息隐藏
	function User(pwd){
		var password=pwd;
		function gerPassword(){
			// 返回了闭包中的 password
			return password;
		}
		// 特权函数声明，用于该对象其他公有方法能通过该特权方法访问到私有成员
		this.passwordService=function(){
			return gerPassword();
		}
	}
	// 公有成员声明
	User.prototype.checkPassword = function( pwd ) {   
		return this.passwordService() === pwd;   
	};
	var u=new User('1234');
	console.log(u.checkPassword('1234'));//true
	console.log(u.password);//undefined
	console.log(u.gerPassword);//undefined

















