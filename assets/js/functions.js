$(document).ready(function() {
    $(".learnMore").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1700, "swing");
    });
});
