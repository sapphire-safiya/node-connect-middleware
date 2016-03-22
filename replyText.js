function replyText(txt){
    return function(req,res){
        res.end(txt);
    }
}


module.exports = replyText;