$(document).ready(function () {
    $('.checklist__url').click(function () {
        if ($(window).width() > 1200) {
            if ($(this).hasClass('checklist__url-active')) {
                $(this).removeClass('checklist__url-active');
                $(this).children('.checklist__url-url').hide();
            } else {
                $(this).addClass('checklist__url-active');
                $(this).children('.checklist__url-url').show();
            }
        }
        else{
            $('.black-bg').fadeIn(400);
            setTimeout(function(){
                $('.share-popup').fadeIn(400);
            }, 450);
        }
    });
    
    $(document).click(function (event) {
        if ($(event.target).closest(".share-popup").length || $(event.target).closest(".checklist__url").length)
            return;
        $('.share-popup').fadeOut(400);

        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 450);
        event.stopPropagation();
    });
    
    $('.share-popup__close').click(function(){
        $('.share-popup').fadeOut(400);

        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 450);
    });
    
    $('.download__close').click(function(){
        $('.download').hide();
    });


    $(window).resize(function () {
        if ($(window).width() <= 1200) {
            $('.checklist__url.checklist__url-active').children('.checklist__url-url').hide();
        } else {
            $('.checklist__url.checklist__url-active').children('.checklist__url-url').show();
        }
    });

    $('.checklist__item').click(function () {
        if ($(this).hasClass('checklist__item--active')) {
            $(this).removeClass('checklist__item--active');
        } else {
            $(this).addClass('checklist__item--active');
        }
    });
});