module.exports = function(app){

    app.get('/noticia', function(req, res){

        var conn = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(conn);
        
        noticiasModel.getNoticia(function(erro, result){
            res.render('noticias/noticia', {noticia: result});
        });
    
    });
};
