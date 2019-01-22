$(function () {
    
    var $navbar =  $(".navbar"); 

    $(window).resize(function(){
        if ($(".navbar-toggler-icon").is( ":visible" ) && ($(".collapse").is( ":visible" ))) { 
            $navbar.addClass("scrolled"); 
        } else if (($(document).scrollTop() === 0) && (!$(".navbar-toggle-icon").is(":visible"))) {
            $navbar.removeClass("scrolled")
        }
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 0){
            $navbar.addClass("scrolled");
        } else if (($(this).scrollTop() === 0) && ((!$( ".collapse" ).is( ":visible" ))) || (!$( ".navbar-toggler" ).is( ":visible" ))){
            $navbar.removeClass("scrolled")
        }
    });
    
    $(".navbar-toggler").click(function() {

        if (($(document).scrollTop() === 0) && (!$navbar.hasClass("scrolled"))) {
            $navbar.addClass("scrolled");
        } else if (($(document).scrollTop() === 0) && ($navbar.hasClass("scrolled"))) {
            $navbar.removeClass("scrolled")
        }       
        
    });
});



