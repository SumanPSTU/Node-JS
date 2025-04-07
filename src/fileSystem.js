var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url=='/'){
        fs.readFile('src/index.html',function (err, data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }
});
server.listen(5000);
console.log('server is running!!!!');