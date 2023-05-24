// плавное появление картинки в бредах по нажатию
$(document).ready(function () {
    $(".section-gallery__block img").click(function () {
        var imgSrc = $(this).attr("src");
        $(".brand-overlay").fadeIn();
        $(".enlarged-img").html("<img src='" + imgSrc + "'>").fadeIn();
    });

    $(".brand-overlay, .enlarged-img").click(function () {
        $(".brand-overlay, .enlarged-img").fadeOut();
    });

    $(".section-gallery__block-slider img").click(function () {
        var imgSrc = $(this).attr("src");
        $(".brand-overlay").fadeIn();
        $(".enlarged-img").html("<img src='" + imgSrc + "'>").fadeIn();
    });

    $(".brand-overlay, .enlarged-img").click(function () {
        $(".brand-overlay, .enlarged-img").fadeOut();
    });
});