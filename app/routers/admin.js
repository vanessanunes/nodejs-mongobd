module.exports = function(app){
    app.get('/formulario', function(req, res){
    res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('nome_autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if (erros){
            res.render('admin/form_add_noticia')
            return ;
        }


        var conn = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });


        
};