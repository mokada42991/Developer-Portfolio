$(document).ready(function() {
    //console.log("masami okada is here");

    $(".learnMore").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1700, "swing");
    });
});
