$(function(){
    $('.boutique-item').click(function(e){
        var tab = $(this).attr('target-data');
        
        $('.boutique-item').removeClass('active');
        $(this).addClass('active');

        $('.boutique-section-container').hide();
        $('.'+tab).fadeIn();
    })
})