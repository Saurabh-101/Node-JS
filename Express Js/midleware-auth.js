const express = require('express');
const app = express();


// req => middleware => res
// middleware import
const logger = require('./Middlewares/logger');
const authorize = require('./Middlewares/authorize');

//app.use(logger); // if no path specified, middleware will execute for all the routes;

app.use('/api',[logger,authorize]); //if path specified, middleware will execute for urls starting with this path

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.get('/api/testerA',(req,res)=>{
    console.log(req.user);
    res.send('Tester A');
})

app.get('/api/testerB',(req,res)=>{
    res.send('Tester B');
})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})