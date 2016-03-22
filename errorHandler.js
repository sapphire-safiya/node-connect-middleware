var fs = require('fs');
var path = require('path');


function errorHandler(dir){
    return function(err,req,res,next){
        res.writeHead(500,{'Content-Type':'text/HTML'});
        res.end('<h1>OOps well this is embarassing, there is an error at our end and our engineers are trying to look into it</h1>');
                
        var fileName = path.join(dir,Date.now().toString()+"_"+Math.floor(Math.random()*10000)+".txt");
        var file = fs.createWriteStream(fileName);
                
        file.write(req.url+"\n");
        file.end(err.stack); 
    }
}


module.exports = errorHandler;