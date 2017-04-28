// exports.hello=function(){
// 	console.log('hello world!');
// }
// exports.say=function(){
// 	console.log('say hello');
// }
var s={
	hello:function(){
		console.log('hello world!');
	},
	say:function(){
		console.log('hello node!');
	}
};
//exports.s=s;
module.exports=s;