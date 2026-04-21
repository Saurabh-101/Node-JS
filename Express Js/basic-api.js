const express = require('express');
const app = express();


app.get('/test-api',(req,res)=>{

    res.json([{"name":"John","age":"34","department":"IT Help Desk"},{"name":"Able","age":"23","department":"Developer"}]);

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})