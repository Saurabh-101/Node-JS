const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === 'Saurabh'){
        req.user = {name:"Saurabh",id:'343'};
        next();
    }
    else{
        res.status(401).send('Unauthorized access request');
    }
    
}

module.exports = authorize;