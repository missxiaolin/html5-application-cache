const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // 获取请求的URL
  const url = req.url;
  console.log(url)
  // 根据URL进行路由处理
  if (url === "/" || url.includes('.html')) {
    let indexPath
    // 返回index.html页面
    if (url.includes('.html')) {
      indexPath = path.join(__dirname, url);
    } else {
      indexPath = path.join(__dirname, "index.html");
    }
    
    fs.readFile(indexPath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (url.indexOf(".js")) {
    // 返回script.js文件
    const scriptPath = path.join(__dirname, "script.js");
    fs.readFile(scriptPath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(data);
      }
    });
  } else if (url.includes(".css")) {
    // 返回style.css文件
    const stylePath = path.join(__dirname, "style.css");
    fs.readFile(stylePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else {
    // 其他路由处理
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// 监听端口
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
