$(document).ready(function(){
    $("#weightinput").hide();
    $("#updateRecord").click(function(){
        $("#weightinput").show

    var userName = '';
    var ipputDate = '';
    var inputTime = '';

    // Data containers
    if (userName == ''){
        var date_1 = [''];
        var weight_1 = [''];

        
    } else if (userName == ''){
        var date_2 = [''];
        var weight_2 = [''];
    } else if (userName == ''){
        var date_3 = [''];
        var weight_3 = [''];
    } else {
        alert("No records found")
    }


    // Summation of the net weight function
    function sumAll(){
        var i;
        var sum = 0;
        for (i=0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum
    }

    //Adding an element to the array
    function updateRecords(){
        var newDate = '';
        var newWeight = '';

        newDate = document.getElementById("#").value.toString();
        newWeight = parseInt(document.getElementById("#").value);

        date.push(newDate);
        weight.push(newWeight);

    }

    
    
    });
    
