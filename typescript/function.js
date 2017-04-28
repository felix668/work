//添加类型
function add(x, y) {
    return x + y;
}
//匿名函数，x和y意义不明确
var myadd = function (x, y) {
    return "hello function";
};
//明确指出参数意义,n和a的具体意义
var adds = function (n, a) {
    return a;
};
//指明两个参数，最后一个参数改成last name?:string;表示参数可选
function allname(firstname, lastname) {
    return firstname + " " + lastname;
}
var reult1 = allname("hello", 'john');
//var reult2=allname("hello",'john','aa');
//可选参数，参数名？
//参数指定默认值
function allname2(firstname, lastname) {
    if (lastname === void 0) { lastname = 'iwn'; }
    return firstname + " " + lastname;
}
var result3 = allname2('jone'); //一个参数时第二个参数适用默认值
var result3 = allname2('jone', 'aa'); //两个参数时，第二个参数值被覆盖
//var result3=allname2('jone','aa','bb');//三个参数报错
//可变参数
function pname(firstname) {
    var restofname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofname[_i - 1] = arguments[_i];
    }
    return firstname + ' ' + restofname.join(" ");
}
var result3 = pname("hello", 'world', 'ben', '?');
console.log(result3);
//lambda =>是一个匿名函数，可以表示闭包,就可以取到this关键字了 he this
var people = {
    name: ['wang', 'xhang', 'li'],
    getname: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 3);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myname = people.getname();
console.log("xing:" + myname().n); //xing:undefined
function attr(nameorage) {
    if (nameorage && typeof nameorage === 'string') {
        console.log('xinming');
    }
    else {
        console.log('nianling');
    }
}
attr('hello');
attr(10);
