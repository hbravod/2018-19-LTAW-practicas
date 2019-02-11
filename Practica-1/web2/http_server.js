const http = require('http');
const fs = require('fs');
const path = require('path');

console.log("Arrancando servidor...")


http.createServer(function (req,res) {
  fs.readFile('CV.html', 'utf8', function (err, data) {
    console.log(req.url);
     if (req.url == '/') {
       res.writeHead(200,{ 'Content-Type': 'text/html' });
       res.write(data);
       return res.end();
     }
     if (req.url.split('.')[1] == 'css'){
       res.writeHead(200,{ 'Content-Type': 'text/css' });
       // data = path.join(_dirname, req.url)
       res.write(data);
       return res.end();
     }
  });
}).listen(8080);
