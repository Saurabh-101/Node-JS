const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        res.status(200).send(`Hi ${name}, welcome to the authorized page.`);
    }
    res.status(401).send('Unauthorised page.');

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})      