var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//类、继承、访问权限、封装、静态属性、进阶技巧
var Peoson = (function () {
    function Peoson(name, age) {
        this.name = name;
        this.age = age;
    }
    Peoson.prototype.print = function () {
        return this.name + "," + this.age;
    };
    return Peoson;
}());
var p = new Peoson('wang', 20);
console.log(p.print()); //wang,20
var person = (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.tell = function () {
        return this.name + "," + this.age;
    };
    return person;
}());
var student = (function (_super) {
    __extends(student, _super);
    function student(school) {
        var _this = _super.call(this, 'john', 10) || this;
        _this.school = school;
        return _this;
    }
    student.prototype.tell = function () {
        return this.name + "," + this.age + "," + this.school;
    };
    return student;
}(person));
var s = new student('jike');
console.log(s.tell());
//访问修饰符 public private(无法访问)
//封装
var hello = (function () {
    function hello() {
    }
    hello.prototype.print = function () {
        return this._age;
    };
    Object.defineProperty(hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newage) {
            if (newage > 100 || newage < 0) {
                console.log('请正确填写年龄');
            }
            else {
                this._age = newage;
            }
        },
        enumerable: true,
        configurable: true
    });
    return hello;
}());
var h = new hello();
h.name = -10;
console.log(h.print());
