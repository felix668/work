//ES6的类，完全可以看作构造函数的另一种写法
class Bar {
  doStuff() {
    console.log('stuff');
  }
}

var b = new Bar();
b.doStuff() // "stuff"

//在类的实例上面调用方法，其实就是调用原型上的方法
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true

//通过extends关键字实现继承
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true