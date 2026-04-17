const express = require('express');

const app = express();

// app.get() -> url with get method
// app.post() -> url with post method
// app.put() -> url with put method
// app.delete() -> url with delete method

// app.use() -> used to handle middlewares
// app.listen() -> listens to the port

// app.all() -> handle all the http methods

app.get('/',(req,res)=>{

    res.send('Hello User, Welcome to home page.');

});

app.get('/about',(req,res)=>{

    res.send('Hello User, Welcome to about page.');

});

app.listen(5000,()=>{console.log(`Server listening to port 5000`)});