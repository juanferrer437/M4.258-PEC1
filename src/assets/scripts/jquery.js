$(document).ready(function () {
    $(".menu__item--toggle").on("click", function () {
        if ($(".menu__item").hasClass("menu__item--active")) {
            $(".menu__item").removeClass("menu__item--active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".menu__item").addClass("menu__item--active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
});
});

