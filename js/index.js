$(document).ready(function(){
   
    $("#hiddenp1,.btn2").hide();
    $("#hiddenp2,.btn4").hide();
    $(".fertilizer").hide();
    $(".attributes1").hide();
    $(".attributes2").hide();
    $(".attributes3").hide();
    $(".attributes4").hide();
    $(".seeattributesbtn5,.seeattributesbtn6,.seeattributesbtn7,.seeattributesbtn8").hide();
    $(".btn1").click(function(){
        $(".btn2,#hiddenp1").show();
        $(".btn1").hide();
    })
    $(".btn2").click(function(){
        $(".btn2,#hiddenp1").hide();
        $(".btn1").show();
    })
    $(".btn3").click(function(){
        $(".btn4,#hiddenp2").show();
        $(".btn3").hide();
    })
    $(".btn4").click(function(){
        $(".btn4,#hiddenp2").hide();
        $(".btn3").show();
    



    

    })
    $(".btn5").click(function(){
        $(".fertilizer").show();
        $(".btn5").hide();
    })
    $(".btn6").click(function(){
        $(".fertilizer").hide();
        $(".btn5").show();
    })
    $(".seeattributesbtn1").click(function(e){
        e.preventDefault();
        $(".attributes1").show();
        $(".seeattributesbtn5").show();  
    })
    $(".seeattributesbtn2").click(function(e){
        e.preventDefault();
        $(".attributes2").show();
        $(".seeattributesbtn6").show();
    })
    $(".seeattributesbtn3").click(function(e){
        e.preventDefault();
        $(".attributes3").show();
        $(".seeattributesbtn7").show();
    })
    $(".seeattributesbtn4").click(function(e){
        e.preventDefault();
        $(".attributes4").show();
        $(".seeattributesbtn8").show();
    })
    $(".seeattributesbtn5").click(function(e){
        e.preventDefault();
        $(".attributes1").hide();
        $(".seeattributesbtn5").hide();
    })
    $(".seeattributesbtn6").click(function(e){
        e.preventDefault();
        $(".attributes2").hide();
        $(".seeattributesbtn6").hide();
    })
    $(".seeattributesbtn7").click(function(e){
        e.preventDefault();
        $(".attributes3").hide();
        $(".seeattributesbtn7").hide();
    })
    $(".seeattributesbtn8").click(function(e){
        e.preventDefault();
        $(".attributes4").hide();
        $(".seeattributesbtn8").hide();
    })
    $("#submit").click(function(e){
        e.preventDefault()
        var name = $("#jina").val();
        var email = $("#email").val();
        var message = $("#message").val();
        alert(`Hey ${name}, Karibu sana TEA-APP. Just to be sure your message is : ${message}`)
      });

})