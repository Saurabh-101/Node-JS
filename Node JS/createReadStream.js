const fs = require('fs');

// const stream = fs.createReadStream('./big-file.txt');


// const stream = fs.createReadStream('./big-file.txt',{highWaterMark:9000,encoding:'utf8'});


const stream = fs.createReadStream('./big-file.txt',{encoding:'utf8'});
// highWaterMark : defines the max size of the chunk
// encoding : defines the file content 


stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})