var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

//Rotas dos Produtos
router.get('/produtos', controllers.produtoscontroller.getProdutos);
router.get('/cadastro', controllers.produtoscontroller.getCadastroProduto);
router.post('/cadastrarproduto', controllers.produtoscontroller.postCadastrarProduto);
router.post('/excluirproduto', controllers.produtoscontroller.excluirProduto);
router.get('/editarproduto/:id', controllers.produtoscontroller.getEditarProduto);
router.post('/editar', controllers.produtoscontroller.postEditarProduto);

module.exports = router;
