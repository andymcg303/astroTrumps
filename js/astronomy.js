$(function () {
    
    var $navbar =  $(".navbar");
    var $collapse = $(".collapse");
    var $navbarToggler = $(".navbar-toggler");  
    var $badge = $(".badge");

    $(window).resize(function(){
        if ($navbarToggler.is( ":visible" ) && ($collapse.is(":visible"))) { 
            $navbar.addClass("scrolled"); 
        } else if (($(document).scrollTop() === 0) && (!$navbarToggler.is(":visible"))) {
            $navbar.removeClass("scrolled")
        }
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 0){
            $navbar.addClass("scrolled");
        } else if (($(this).scrollTop() === 0) && ((!$collapse.is(":visible"))) || (!$navbarToggler.is(":visible"))){
            $navbar.removeClass("scrolled")
        }
    });
    
    $navbarToggler.click(function() {

        if (($(document).scrollTop() === 0) && (!$navbar.hasClass("scrolled"))) {
            $navbar.addClass("scrolled");
        } else if (($(document).scrollTop() === 0) && ($navbar.hasClass("scrolled"))) {
            $navbar.removeClass("scrolled")
        }       
        
    });

    $badge.click(function(){
        $(this).css("background", "red");
    });

    $("#reset").click(function(){
        $badge.css("background", "#6c757d")
    });

});



