var http = require('http');


var server = http.createServer(function(req, res) {


    if (req.url === '/') {
        res.end('Hello World');
    }
    if (req.url === '/home') {
        res.end('Hello India');
    }
})

server.listen(5000, function() {

    console.log('server listerning in port 5000');

});