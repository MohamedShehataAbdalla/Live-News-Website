import $ from 'jquery'; 

$(".loading").height($(window).height());
$(".loading").width($(window).width());

    
$(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
});

$(window).resize(function () {
   
    
    $(".loading").height($(window).height());
    $(".loading").width($(window).width());


    $(".loading img").css({
        paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
        paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
    });

    
    
});

$(window).mousemove(function (e) {
   
    
    $(".original").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    });
    
});

$("body").on("click", function (e) {
   
    
    $(".original").clone(true).appendTo("body").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    }).removeClass("original");
    
});