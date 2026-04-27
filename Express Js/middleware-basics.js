const express = require('express');
const app = express();

// req => middleware => res


// middleware to log the method, url and date
// a middleware has the access to req & res object
// next is used to tell the middleware to move to next method/middleware/callback
// put all these three as parameters of middleware 
const logger = (req,res,next)=>{

    const method = req.method;
    const url = req.url;
    const date = new Date().getDate();

    if(url=='/about'){
        return res.send('Sending this response from middleware, only for about page');
    }
    console.log(method,url,date);
    next();

}

app.get('/',logger,(req,res)=>{
    res.send('Home Page');
})

app.get('/about',logger,(req,res)=>{
    res.send('About page');
})

app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})