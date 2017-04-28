const http = require('http');//启用网络服务模块

//const hostname = '127.0.0.1';//URL主机名
//
//const port = 3000;//指定URL端口

const server = http.createServer((req, res) => {//required response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello yyay\n');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
server.listen(8000);