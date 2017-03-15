$(function(){
    var st = getQueryString('st');
    if(st){
        $('.boutique-item-' + st).addClass('active');        
        $('.boutique-section-container').hide();
        $('.tab-'+st).fadeIn();
    }else{
        $('.boutique-item-1').addClass('active');
    }

    $('.boutique-item').click(function(e){
        var tab = $(this).attr('target-data');
        
        $('.boutique-item').removeClass('active');
        $(this).addClass('active');

        $('.boutique-section-container').hide();
        $('.'+tab).fadeIn();
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