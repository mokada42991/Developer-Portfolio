$(document).ready(function() {
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
});
