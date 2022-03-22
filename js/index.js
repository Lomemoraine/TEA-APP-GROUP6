$(document).ready(function(){
    
    alert("Lorraine")

    $("#submit").click(function(e){
        e.preventDefault()
        var name = $("#jina").val();
        var email = $("#email").val();
        var message = $("#message").val();
        alert(`Hey ${name}, Karibu sana TEA-APP. Just to be sure your message is : ${message}`)
      });
})