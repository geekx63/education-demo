$(function(){
    var st = getQueryString('st');
    if(st){
        $('.boutique-item:eq(' + (st-1) +')').addClass('active');        
        $('.boutique-section-container').hide();
        $('.tab-'+st).fadeIn();
    }else{
        $('.boutique-item:eq(0)').addClass('active');
    }

    $('.boutique-item').click(function(e){
        var tab = $(this).attr('target-data');
        
        $('.boutique-item').removeClass('active');
        $(this).addClass('active');

        $('.boutique-section-container').hide();
        $('.'+tab).fadeIn();
    })

    var itemLength = $('.boutique-item').length;
    var index = 3;
    $('.btn-next').click(function(){
        if(index < itemLength){
            $('.boutique-item:eq('+ (index-3) +')').hide();
            $('.boutique-item:eq('+ (index) +')').fadeIn();
            index++;
        }
    })

    $('.btn-prev').click(function(){
        if(index > 3){
            index--;
            $('.boutique-item:eq('+ (index) +')').hide();
            $('.boutique-item:eq('+ (index-3) +')').fadeIn();
        }
    })

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
})