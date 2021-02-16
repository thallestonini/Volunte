$(document).ready(function($) {
    var topoFixo = $("header").offset().top;
    $(document).scroll(function(event) {
        if(topoFixo <= $(window).scrollTop()) {
            $("header").addClass('teste_menu');
            $("body").css({marginTop: $("header").height() + "px"});
        } else {
            $("header").removeClass('teste_menu');
            $("body").css({marginTop: "0"});
        }
    }).trigger('scroll');
});