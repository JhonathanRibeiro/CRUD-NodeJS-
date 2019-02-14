var mysql = require('mysql');
var dateFormat = require('dateformat');    

// Produtos controller 

module.exports = {
    //funções do controller
    getProdutos : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var produtos = null;

        db.query('SELECT * FROM produtos', function(err, rows, fields){
            if(err) throw err;

            produtos = rows;
            db.end();

            res.render('produtos/produtos', {produtos : produtos});
        });
    },

    getCadastroProduto : function(req, res, next){
        res.render('produtos/cadastro');
    },

    postCadastrarProduto : function(req, res, next) {
        
        var dataAtual = new Date();
        var data = dateFormat(dataAtual, 'yyyy-mm-dd h:MM:ss');

        var produto = {
            nome : req.body.nome,
            preco : req.body.preco,
            estoque : req.body.estoque,
            data_criacao : data
        }

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO produtos SET ?', produto, function(err, rows, fields){
            if(err) throw err;
            
            db.end();
        });

        res.render('produtos/cadastro', {info : 'Produto cadastrado com sucesso!'});
        //console.log(req.body);
    },
//Função Excluir Produto
    excluirProduto : function(req, res, next){
        var id = req.body.id;

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var resposta = {res: false};

        db.query('DELETE FROM produtos WHERE id_produto = ?', id, function(err, rows, fields){
            if(err) throw err;

            db.end();
            resposta.res = true;

            res.json(resposta);
        });
    },
//Função Editar Produto
    getEditarProduto : function(req, res, next){
        var id = req.params.id;

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var produto = null;

        db.query('SELECT * FROM produtos WHERE id_produto = ?', id, function(err, rows, fields){
            if(err) throw err;

            produto = rows;
            db.end();

            res.render('produtos/editar', {produto: produto});
        });
    },

    postEditarProduto : function(req, res, next){
        
        var produto = {
            nome : req.body.nome,
            preco : req.body.preco,
            estoque : req.body.estoque
        };

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        db.query('UPDATE produtos SET ? WHERE ?', [produto, {id_produto : req.body.id_produto}], function(err, rows, fields){
            if(err) throw err;
            db.end();
        });

            res.redirect('/produtos');

    }

}