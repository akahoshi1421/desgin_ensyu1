var cnt = 0;
setInterval(()=>{
    if(cnt == 4) cnt = 0;
    resultdot = ""
    for(let i = 0; i < cnt; i++){
        resultdot += ".";
    }
    cnt++;
    $("#loadmsg").text("Loading" + resultdot);
}, 400);

$(window).on("load", ()=>{
    $(".loading").delay(500).fadeOut(1500);
})

$(document).on("mouseover", ".links li", function(){
    $(this).find(".underline").css({
        "width": "120%"
    });
});

$(document).on("mouseleave", ".links li", function(){
    $(this).find(".underline").css({
        "width": "2%"
    });
});

$(document).on('click', ".img", function(){
    $(".imgs img, .imgs .img-bg").addClass("move");
    setTimeout(()=>{
        $(".imgs img, .imgs .img-bg").removeClass("move");
    }, 2600);
});