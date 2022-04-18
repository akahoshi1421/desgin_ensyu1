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
    $(".loading").delay(1000).fadeOut(1500);
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
