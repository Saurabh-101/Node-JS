const http = require('http');

const fs = require('fs');

const homePage = fs.readFileSync('./index.html');
const errorPage = fs.readFileSync('./error-page.html');
const server = http.createServer((req,res)=>{

    const url = req.url;
    if(url == '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write(errorPage);
        res.end();
    }

})

server.listen(5000,()=>{console.log(`server running on PORT 5000`)});