const express = require('express');

const router = express.Router();

router.post('/login',(req,res)=>{

    const {name} = req.body;
    if(name){
        return res.status(200).send(`Hi ${name}, welcome to the authorized page.`);
    }
    return res.status(401).send('Unauthorised page.');

})
router.get('/',(req,res)=>{

    res.send('Home Page');
})

module.exports = router;