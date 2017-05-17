$(document).ready(function() {
    $('body').bind('touchstart', function() {});
    
    $(".learnMore").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1700, "easeInOutExpo");
    });

    $(".contact-button").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".contact").offset().top
        }, 2000, "easeInOutExpo");
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $(".back-to-top").fadeIn(900, "swing");
        } else {
            $(".back-to-top").fadeOut(900, "swing");
        }
    });
    $(".back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0}, 2000, "easeInOutExpo");
        return false;
    })

});
