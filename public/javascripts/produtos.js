$(function(){
  
    //função AJAX excluir produto
    $('#tbl-produtos #btn-excluir').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#id_produto').text();

        var confirmar = confirm('Excluir produto');

        if(confirmar) {
            $.ajax({
                url : 'http://localhost:3000/excluirproduto',
                method : 'post',
                data : {id : id},
                success : function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    }
                }
              });
        }
    });

});