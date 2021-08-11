
module.exports = function(app){

    app.get('/noticias', function(req, res){

        var conn = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticias(function(erro, result){
            res.render('noticias/noticias', {noticias: result});
        });
    
    });
};
