$(document).ready(function () {
    $(".nav-link").click(function () {
        if ($(".navbar-toggler").is(":visible")) {
            $(".navbar-toggler").click(); // Simulate a click on the toggler
        }
    });
});

// var typed=new typed('.auto-type', {
//     strings : ['Full Stack Web Developer','ux/ui desingner','Mobile app developer'],
//     typeSpeed : 100,
//     backSpeed : 100,
//     looped : true,
// })



