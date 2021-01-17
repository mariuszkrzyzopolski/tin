$(function(){
    $("#d1").click(function (){
        $("#conn_dom").append('<div>new sample</div>');
    })

    $("#d2").click(function (){
        $("#conn_dom").children().first().remove();
    })

    $("#d3").click(function (){
        $("#conn_dom div:eq(2)").css("background", "yellow");
    })

    $("#d4").click(function (){
        $("#conn_dom div").text("nowy tekst");
    })
})