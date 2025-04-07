const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){
    res.writeHead(200,{"content-type":'text/html'});
    res.write('<h1 style="color: blue;text-align: center">This is a text</h1>');
    var urlp = url.parse(res.url,true).query;
    var text = urlp.name+""+urlp.year;


    res.end();
});
server.listen(5000);
console.log('server is running');