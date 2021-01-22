$(function(){
    $("#create").click(function (){
        $("#create").fadeOut("slow");
        $("#load").fadeOut("slow");
        $("#creation").fadeIn("slow");
    })
    $("#load").click(function (){
        $("#create").fadeOut("slow");
        $("#load").fadeOut("slow");
        $("#game").fadeIn("slow");
        $("#corridors").fadeIn("slow");
    })

     $("#char_create").click(function (){
        $("#creation").fadeOut("slow");
        $("#game").fadeIn("slow");
        $("#corridors").fadeIn("slow");
    })
})