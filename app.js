const http = require('http');

http.createServer((req, res) => {
  res.end("Hello DevOps!");
}).listen(3000);

console.log("Running on port 3000");