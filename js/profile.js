$(document).ready(function(){
    $("#weightinput").hide();
    $("#updateRecord").click(function(){
        $("#weightinput").show();

    
        // Useful in creating unique array identifier
    var identifierVar = '';

    function getLoginValue (){
        identifierVar = document.getElementById("#").value.toString();
        return identifierVar;
    });

    function arraySpecifier (identifierVar){
        var date = "date";
        var weight = "weight";

        date += identifierVar;
        weight += identifierVar;

        return date, weight;
    };

    });
    
    




    