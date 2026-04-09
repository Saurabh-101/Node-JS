const fs = require('fs');

const getText = (path)=>{
    // Create a promise to fetch the data using readFile
    const promise = new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }

        })
    })
    // return the promise 
    return promise;
};

// getText returns a promise, thus handle using .then().catch().finally()
// getText('./first.txt').then((resolve)=>{console.log(resolve)}).catch((error)=>{console.log(error)})

const start = async()=>{

    try{
        const first = await getText('./first.txt');
        const second = await getText('./second.txt');
    
        console.log(first,second);

    }catch(err){
        console.log(err);
    }

}
// call the start function
start();