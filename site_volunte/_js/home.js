function mostraConteudo(id){
    var targetOffset = $(id).offset().top;
    $('html, body').animate({ 
        scrollTop: targetOffset - 70
    }, 700);
}