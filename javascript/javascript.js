$(function(){
    // banner动画
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $('.section-2-header>li').click(function(e){
    	$('.section-2-header>li').removeClass('active');
    	$(this).addClass('active');

    	$('.section-2-content>div').hide();
		$('#' + $(this).attr('target-data')).fadeIn('swing');
    })

    var qqShow = false;
    window.onscroll = function(){
        if(window.scrollY >= 330 && qqShow === false){
            $('.customer-service').fadeIn();
            qqShow = true;
        }else if(window.scrollY < 330 && qqShow === true){
            $('.customer-service').fadeOut();
            qqShow = false;
        }
    }
})