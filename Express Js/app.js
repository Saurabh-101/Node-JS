const express = require('express');
const path = require('path');
const app = express();

// app.get() -> url with get method
// app.post() -> url with post method
// app.put() -> url with put method
// app.delete() -> url with delete method

// app.use() -> used to handle middlewares
// app.listen() -> listens to the port

// app.all() -> handle all the http methods

// setup static and middleware - a file tat server will keep static for all urls
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    
    res.sendFile(path.resolve(__dirname,'./bike-app/index.html'));

})

app.listen(5000,()=>{console.log(`Server listening to port 5000`)});