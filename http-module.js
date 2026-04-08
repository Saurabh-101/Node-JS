const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url=== '/'){
        res.end('Welcome to home page');
    }else if(req.url==='/test'){
        res.end('Welcome to TEST page');
    }else{
        res.end(`<h1>ERROR 404</h1>`);
    }
})

server.listen(5000);