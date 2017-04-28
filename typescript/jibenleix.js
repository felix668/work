//boolean
var isboon = false;
console.log(isboon);
//number
var num = 10;
console.log(num);
//string
var str = 'world';
console.log('hello ' + str);
//arr
var list = [1, 2, 3];
var list2 = ['3', '4', '5'];
console.log(list + ';' + list2);
//枚举类型，限制在有限范围内
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 5] = "green";
    color[color["blue"] = 10] = "blue";
})(color || (color = {}));
; //下标可以赋值操作{red=1,green=5,blue=8}
var col = color[5];
var c = color.green; //获取下标
console.log(c + ',' + col);
//any 不确定类型
var notsure = 10;
notsure = "hello";
var bb = [1, 'xiaowang'];
console.log(notsure + ',' + bb);
