$(function(){
  $('.form-cadastrarProduto form').form({
     nome : {
       identifier : 'nome',
       rules : [
         {
            type : 'empty',
            prompt : 'Por favor informe um nome'
         }
       ]
     },

     preco : {
       identifier : 'preco',
       rules : [
         {
            type: 'empty',
            prompt : 'Por favor informe um preço'
         },
         {
            type: 'number',
            prompt : 'O preço deve ser numérico'
         }
       ]
     },
     
     estoque : {
       identifier : 'estoque',
       rules : [
         {
            type: 'empty',
            prompt : 'Por favor preencha o campo estoque'
         },
         {
            type: 'integer',
            prompt : 'O campo estoque deve ser um número inteiro'
         }
       ]
     }  

  });
});