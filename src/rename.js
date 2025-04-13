var http = require('http');
var url = require('url');
var fs = require('fs');


var server  = http.createServer(function (req,res){

    fs.rename('index.doc','input.txt',function (err){
        err?console.log('something error'):console.log('success');
        res.end();
    })

});
server.listen(5500);
console.log('server sunning on port 5500')