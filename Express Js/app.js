const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/people',(req,res)=>{

    const {name} = req.body;

    if(!name){
        return res.status(400).json({success:false,msg:'Please enter name.'})
    }
    res.status(200).json({success:true,msg:`Welcome ${name}`});

})

app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        res.status(200).send(`Hi ${name}, welcome to the authorized page.`);
    }
    res.status(401).send('Unauthorised page.');

})
app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})      