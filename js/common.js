$(".nav-tabs").mouseover(function () {
    $(this).css("background","#efefef")
    if($(this).find($(".sec-tab"))){
        $('.sec-tab').removeClass('active');
        $(this).find($(".sec-tab")).addClass('active');
    }else {
        $('.sec-tab').removeClass('active');
    }
}).mouseleave(function () {
    $('.sec-tab').removeClass('active');
    $(this).css("background","#fff");
});