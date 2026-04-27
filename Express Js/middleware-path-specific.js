const express = require('express');
const app = express();


// req => middleware => res
// middleware import
const logger = require('./Middlewares/logger');


//app.use(logger); // if no path specified, middleware will execute for all the routes;

app.use('/api',logger); //if path specified, middleware will execute for urls starting with this path

// also order matters for the middlewares, if executed after a app.get(), middleware will not be executed for that url


app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.get('/api/testerA',logger,(req,res)=>{
    res.send('Tester A');
})

app.get('/api/testerB',logger,(req,res)=>{
    res.send('Tester B');
})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})