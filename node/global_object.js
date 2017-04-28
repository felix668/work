// console.log(__filename);//输出文件所在位置的绝对路径
// console.log(__dirname);//当前执行脚本所在的目录
// //全局函数setTimeout(cb,ms)、clearTimeout(t)、setInterval(cb,ms)、clearInterval(t)、console
// function printHello(){
// 	console.log("hello!");
// }
// let t=setTimeout(printHello, 1000);
// clearTimeout(t);
// let tt=setInterval(printHello, 1000);
// clearInterval(tt);
//全局变量 process
// process.on('exit', function(code) {

//   // 以下代码永远不会执行
//   setTimeout(function() {
//     console.log("该代码不会执行");
//   }, 0);
  
//   console.log('退出码为:', code);
// });
// console.log("程序执行结束");
//程序执行结束
//退出码为: 0
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);


