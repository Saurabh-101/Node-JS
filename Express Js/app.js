const express = require('express');
const app = express();


const {companySites} = require('./data');

app.get('/test-api',(req,res)=>{
    const sites = companySites.map((companySite)=>{
        const {name,location,department} = companySite;
        return {name,location,department};
    })
    res.json(sites);

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})