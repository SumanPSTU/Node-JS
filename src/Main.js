var http = require('http');


var server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1 style="color: blue;text-align: center">this is home page dear</h1>');
    res.end();
});

server.listen(5000);
console.log("server is running state")