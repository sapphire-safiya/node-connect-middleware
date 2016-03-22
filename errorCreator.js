function createError(){
    return function(req,res,next){
        next(new Error('This is an Error'));
    }
}

module.exports = createError;