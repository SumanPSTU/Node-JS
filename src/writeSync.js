var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        try {
            fs.writeFileSync('index.doc', 'this is a doc file');
            res.end('File written successfully');
        } catch (err) {
            console.error('Error writing to file:', err);
            res.end('File writing failed');
        }
    }
});

server.listen(5500);
console.log('Server is running on port ' + 5500);
