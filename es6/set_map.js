//set()数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

//去除数组的重复成员,向Set加入值的时候，不会发生类型转换
var array=[1,2,3,2,4,5,'4'];
console.log([...new Set(array)]);//[1, 2, 3, 4, 5.'4']

//Set结构的实例有以下属性
//Set.prototype.constructor：构造函数，默认就是Set函数。
//Set.prototype.size：返回Set实例的成员总数。

//Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法;
//
//操作方法
//add(value)：添加某个值，返回Set结构本身
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
//has(value)：返回一个布尔值，表示该值是否为Set的成员
//clear()：清除所有成员，没有返回值。

var s=new Set();
s.add(1).add(2).add(2);
s.size;//2
s.has(1);//true
s.delete(2);//true
s.has(2);//false

//Array.from方法可以将Set结构转为数组。
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
//这就提供了去除数组重复成员的另一种方法
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]

//遍历方法
//keys()：返回键名的遍历器
//values()：返回键值的遍历器
//entries()：返回键值对的遍历器
//forEach()：使用回调函数遍历每个成员

let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
  console.log(item);
}
//red
//green
//blue


for (let item of set.values()) {
  console.log(item);
}
//red
//green
//blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
// 
let sets = new Set([1, 2, 3]);
sets.forEach((value, key) => console.log(value * 2) )
// 2
// 4
// 6

//扩展运算符和Set结构相结合，就可以去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]
// 
//数组的map和filter方法也可以用于Set了
//
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
// 
// 
// 使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
// 
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);//Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}


//WeakSet结构与Set类似，也是不重复的值的集合,但是,WeakSet的成员只能是对象，而不能是其他类型的值,WeakSet中的对象都是弱引用
//
var ws = new WeakSet();
//WeakSet结构有以下三个方法。

//WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
//WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
//WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中。
//

var ws = new WeakSet();
var obj = {};
var foo = {};
ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false

ws.delete(window);
ws.has(window);    // false

//WeakSet没有size属性，没有办法遍历它的成员
ws.size // undefined
ws.forEach // undefined

ws.forEach(function(item){ console.log('WeakSet has ' + item)})
// TypeError: undefined is not a function



//Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
var arr=[['name', '张三'],['title', 'Author']];
var map = new Map(arr);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
map.set(262,'setadd');//Map {"name" => "张三", "title" => "Author", 262 => "setadd"}
//对同一个键多次赋值，后面的值将覆盖前面的值
//如果读取一个未知的键，则返回undefined
//只有对同一个对象的引用，Map结构才将其视为同一个键


//map实例属性
//
//size属性返回Map结构的成员总数
//set(key, value)
//get(key)读取key对应的键值，如果找不到key,返回undefined
//has(key)表示某个键是否在Map数据结构中
//delete(key)方法删除某个键，返回true。如果删除失败，返回false
//clear()方法清除所有成员，没有返回值

//遍历方法
//keys()：返回键名的遍历器。
//values()：返回键值的遍历器。
//entries()：返回所有成员的遍历器。
//forEach()：遍历Map的所有成员
for(let key of map.keys()){
	console.log(key);
}
[...map.keys()];//["name", "title", 262]
//name
//title
//262
for(let value of map.values()){
	console.log(value);
}
[...map.values()];
//张三
//Author
//setadd
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
[...map.entries()]等同于[...map]
//name 张三
//title Author
//262 "setadd"
//
//
map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
//Key: name, Value: 张三
//Key: title, Value: Author
//Key: 262, Value: setadd



//结合数组的map方法、filter方法，可以实现Map的遍历和过滤
let map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

let map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生Map结构 {1 => 'a', 2 => 'b'}

let map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生Map结构 {2 => '_a', 4 => '_b', 6 => '_c'}


//与其他数据结构的互相转换
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap];//[ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ],转为数组

new Map([[true, 7], [{foo: 3}, ['abc']]])
// Map {true => 7, Object {foo: 3} => ['abc']}，数组转为map

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap);//{ yes: true, no: false }转为对象


function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
objToStrMap({yes: true, no: false});//[ [ 'yes', true ], [ 'no', false ] ]对象转为Map


function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'Map转为JSON,Map的键名都是字符串

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]',Map的键名有非字符串
// 

//JSON转为Map,所有键名都是字符串
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes":true,"no":false}')
// Map {'yes' => true, 'no' => false}
//特殊情况，整个JSON就是一个数组，且每个数组成员本身，又是一个有两个成员的数组
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}


//WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制
//
var wm = new WeakMap();
var element = document.querySelector(".element");
wm.set(element, "Original");
wm.get(element) // "Original"

element.parentNode.removeChild(element);
element = null;
wm.get(element) // undefined
//WeakMap与Map在API上的区别主要是两个，一是没有遍历操作（即没有key()、values()和entries()方法），也没有size属性；二是无法清空，即不支持clear方法。这与WeakMap的键不被计入引用、被垃圾回收机制忽略有关。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
























