'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = function a(name, age) {
	_classCallCheck(this, a);

	this.name = name;
	this.age = age;
};

var b = function (_a) {
	_inherits(b, _a);

	function b(language) {
		_classCallCheck(this, b);

		var _this = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, 'wang', 18));

		_this.language = language;
		return _this;
	}

	_createClass(b, [{
		key: 'fn',
		value: function fn() {
			return this.name + this.age + this.language;
		}
	}]);

	return b;
}(a);

var p = new b('zhang', 28, 'china');
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
