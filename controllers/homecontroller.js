// Home controller 

module.exports = {
    //funções do controller
    index : function(req, res, next){
        res.render('index', {title : 'crud com NodeJS'});
    }
}