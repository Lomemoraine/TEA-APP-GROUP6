$(document).ready(function(){
    $("#weightinput").hide();
    $("#updateRecord").click(function(){
        $("#weightinput").show
    });

    var userName = 'john';
    // var newDate = '';
    // var newWeight = '';

    $("#name").text(userName);

    // Summation of the net weight function
    function sumAll(arrayInput){
        var i;
        var sum = 0;
        for (i=0; i < arrayInput.length; i++){
            sum += arguments[i];
        }
        return sum
    };

    //Adding an element to the array
    function updateRecords(){
        var newDate = '';
        var newWeight = '';

        newDate = document.getElementById("#day").value.toString();
        newWeight = parseInt(document.getElementById("#weight").value);

        date.push(newDate);
        weight.push(newWeight);

    }

    // Data containers
    if (userName == 'john'){
        var date = ['22/01/2022','27/01/2022','07/02/2022','10/02/2022','14/02/2022','21/02/2022'];
        var weight = [30,45,61,32,23,41];        
        return date, weight;

    } else if (userName == 'doe'){
        var date = ['27/01/2022','02/02/2022','09/02/2022','13/02/2022','21/02/2022','01/03/2022'];
        var weight = [123,56,76,46,92,107];
        return date, weight;

    } else if (userName == 'roberts'){
        var date = ['02/01/2022','13/01/2022','19/01/2022','26/01/2022','03/02/2022','16/02/2022','19/02/2022','26/02/2022','04/03/2022'];
        var weight = [111,56,57,113,45,65,135,32,47];
        return date, weight;

    } else {
        alert("No records found")
    }

    $("#totalSupplied").html.(sumAll(weight));

    $("#okaybutton").click(function(){
        updateRecords();
        $("#totalSupplied").html.(sumAll(weight));
        $("#weightinput").hide();

    }
    
    });