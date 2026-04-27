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

    // console.log(req.query);
    // res.send("testing the query string passed in URL, please check the console.");

    const {search, limit} = req.query; // getting the query parameters search and limit

    let filteredSites = [...companySites];

    if(search){
        //if search parameted is given in url, search the sites name starting with the search parameter's value
        filteredSites = filteredSites.filter((site)=>{
            return site.name.toLocaleLowerCase().startsWith(search);
        })
    }

    if(limit){
        //if limit is given in the url as query parameter, limit the number of records till the number
        filteredSites = filteredSites.slice(0,Number(limit));
    }

    // if(filteredSites.length<1){
    //     // return res.status(200).send("No sites matched the search");
    //     return res.status(200).json({
    //         success: true,
    //         data: filteredSites
    //     })
    // }

    // return res.status(200).json(filteredSites);
    return res.status(200).json({
            success: true,
            data: filteredSites
        })

})


app.listen(5000,()=>{
    console.log(`Server listening to PORT 5000`);
})