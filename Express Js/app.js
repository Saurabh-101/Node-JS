const express = require('express');
const app = express();
const api = require('./routes/api');
const login = require('./routes/auth');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',api);

app.use('/',login);



app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})      