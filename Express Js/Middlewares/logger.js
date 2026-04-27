const logger = (req,res,next)=>{

    const method = req.method;
    const url = req.url;
    const date = new Date().getDate();

    if(url=='/about'){
        return res.send('Sending this response from middleware, only for about page');
    }
    console.log(method,url,date);
    next();

}
// middleware to log the method, url and date
// a middleware has the access to req & res object
// next is used to tell the middleware to move to next method/middleware/callback
// put all these three as parameters of middleware 


module.exports = logger;