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

app.get('/test-api/:id',(req,res)=>{
    console.log(req);
    console.log(req.params);
    const {id} = req.params;
    const site = companySites.find((companySite)=>companySite.id === Number(id));

    if(!site){
        return res.status(404).send('DATA NOT FOUND');
    }

    return res.json(site);
})

// More complex route parameters

app.get('/test-api/:productId/reviews/:reviewId',(req,res)=>{

    console.log(req.params);
    const {productId,reviewId} = req.params;
    return res.json([{product:productId,review:reviewId}]);

})

app.get('/test-api/v1/query',(req,res)=>{

    console.log(req.query);
    res.send("testing the query string passed in URL, please check the console.");

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})