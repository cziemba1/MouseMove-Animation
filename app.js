$("#background-wrapper").mousemove(function (e) {

    var moveX = (($(window).width() / 2) - event.pageX) * 0.02;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.02;
    $(".bg-fruits").css("margin-left", moveX + "px");
    $(".bg-fruits").css("margin-top", moveY + "px");
})