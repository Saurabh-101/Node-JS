const http = require('http');

const server = http.createServer();

// .on() listen for the 'request' event 
// Class http.Server has the 'request' event
server.on('request',(req,res)=>{
    res.end('Hello World');
})

server.listen(5000)