$(function() {
    $('.acc').click(function() {
    	$('.panel').slideUp();
        $(this).next().slideDown();
    });
});