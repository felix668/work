//原始数据类型Symbol，表示独一无二的值
//
let s = Symbol();
typeof s;// "symbol"

//Symbol函数前不能使用new命令，否则会报错。Symbol('foo')有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)

//Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
//
var s1 = Symbol('foo'),s2 = Symbol('foo');s1 === s2 // false

//Symbol值不能与其他类型的值进行运算，会报错;但是，Symbol值可以显式转为字符串。也可以转为布尔值，但是不能转为数值
//
var sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
Boolean(sym) // true
!sym  // false
Number(sym) // TypeError
sym + 2 // TypeError


//作为属性名的Symbol 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖

var mySymbol = Symbol();
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
//等同于
a[mySymbol] = 'Hello!';
//
var a = {
  [mySymbol]: 'Hello!'
};
//Symbol值作为对象属性名时，不能用点运算符
a[mySymbol] // "Hello!"

//消除魔术字符串魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，该由含义清晰的变量代替
const shapeType = {
  triangle: Symbol()
};

//Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名

var obj={};
Object.defineProperty(obj,Symbol("foo"),{value: "foobar",});
Object.getOwnPropertySymbols(obj)
// [Symbol(foo)]

//Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj);//  ["enum", "nonEnum", Symbol(my_key)]

//使用同一个Symbol值,Symbol.for为Symbol值登记的名字，是全局环境的
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
var s3 = Symbol('foo');
s1 === s2 // true
s1===s3 //false
//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
Symbol.keyFor(s1) // "foo"
Symbol.keyFor(s3) //undefined


//Singleton模式指的是调用一个类，任何时候返回的都是同一个实例
////对象的Symbol.hasInstance属性，指向一个内部方法
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}
//instanceof来检测某个对象是不是另一个对象的实例
[1, 2, 3] instanceof new MyClass() // true

//对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。
let obj = {length: 2, 0: 'c', 1: 'd'};
['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']

//对于一个类来说，Symbol.isConcatSpreadable属性必须写成实例的属性。
class A1 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = true;
  }
}
class A2 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = false;
  }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)
// [1, 2, 3, 4, [5, 6]]
// 
//对象的Symbol.species属性，指向当前对象的构造函数
lass MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

mapped instanceof MyArray // false
mapped instanceof Array // true

//对象的Symbol.match属性，指向一个函数
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()) // 1


//对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

//String.prototype.replace(searchValue, replaceValue)
// 等同于
//searchValue[Symbol.replace](this, replaceValue)

const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]

//对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值
//
//String.prototype.search(regexp)
// 等同于
//regexp[Symbol.search](this)

class MySearch {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}
'foobar'.search(new MySearch('foo')) // 0

//对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
//String.prototype.split(separator, limit)
// 等同于
//separator[Symbol.split](this, limit)

class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    var index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}
'foobar'.split(new MySplitter('foo'));// ['', 'bar']
'foobar'.split(new MySplitter('bar'));// ['foo', '']
'foobar'.split(new MySplitter('baz'));// 'foobar'

//对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]

// /对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'


//对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串
























