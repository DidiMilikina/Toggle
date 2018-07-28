$('.holder').on('click', function () {
    if ($(this).hasClass('on') || $(this).hasClass('off')) {
        $(this).toggleClass('on');
        $(this).toggleClass('off');
    }
    else {
        $(this).addClass('on');
    }
});