$(document).ready(function(){
    $("#hiddenp,.btn2").hide();
    $(".btn1").click(function(){
        $(".btn2,#hiddenp").show();
    })
    $(".btn2").click(function(){
        $(".btn2,#hiddenp").hide();
    })
    

})