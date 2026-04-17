const http = require('http');

const fs = require('fs');

const homePage = fs.readFileSync('./bike-app/index.html');
const style = fs.readFileSync('./bike-app/style.css');
const logo = fs.readFileSync('./bike-app/logo.jpg');
const script = fs.readFileSync('./bike-app/script.js');
const errorPage = fs.readFileSync('./error-page.html');
const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url);
    if (url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url == '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(style);
        res.end();

    } else if (url == '/logo.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg + xml' });
        res.write(logo);
        res.end();

    }else if (url == '/script.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(script);
        res.end();

    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write(errorPage);
        res.end();
    }

})

server.listen(5000, () => { console.log(`server running on PORT 5000`) });