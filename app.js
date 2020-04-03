function copy (){
    if ($("textarea").text() != "") {
    var copyText = $("textarea")
    copyText.select();
    document.execCommand("copy")
}
}
$("input").on("keydown", function(e) {
    if (e.which <=48 || e.which <=57 || e.which === 8) {
       return
    } else {
        e.preventDefault()
    }
})
function nice(data) {
    var value = data.value + "px";
    var side = data.className;
    $(".box").css(side, value)
    var style = $(".box").attr("style")
    $("textarea").text( "" + style )   
}
$(".code").on("keydown", function (e){
    e.preventDefault();
})