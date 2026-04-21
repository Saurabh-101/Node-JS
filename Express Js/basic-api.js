const express = require('express');
const app = express();


const {companySites} = require('./data');

app.get('/test-api',(req,res)=>{

    res.json(companySites);

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})