$(document).ready(function () {
    $(".nav-link").click(function () {
        if ($(".navbar-toggler").is(":visible")) {
            $(".navbar-toggler").click(); // Simulate a click on the toggler
        }
    });
});




