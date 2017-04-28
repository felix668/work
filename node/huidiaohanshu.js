var fs=require('fs');
//阻塞代码实例,同步读取
var data=fs.readFileSync('input.txt');
console.log(data.toString());
//node 执行结果 先输出input.txt的内容，在输出程序执行结束,同步是一步一步的执行，执行完一个在进行一个，例如米饭熟了之后在炒菜
//非阻塞代码实例，异步读取
// fs.readFile('input.txt',function(err,data){
// 	if(err) return console.error(err);
// 	console.log(data.toString());
// });
// node 执行结果 先输出程序执行结束，在输出input.txt的内容,异步是多个步骤同时进行，例如煮米饭的时间可以同时炒菜,node通过事件和回调支持并发
console.log('程序执行结束');