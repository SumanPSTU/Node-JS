var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    fs.writeFile('index.txt','text file writting complete',function (err){
       err?console.log('file writing failed'):console.log('file created success');

       fs.readFile('index.txt',function (err, data){
           res.writeHead(200,{'content-type':'text/html'});
           res.write(data);
           res.end();
       })

    });
});

server.listen(5050);
console.log('port is running');