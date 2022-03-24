$(document).ready(function(){
    $("#weightinput").hide();
    $("#tableSummary").hide();
    $("#select-to-view").hide();
    $("#updateRecord").click(function(){
        $("#weightinput").show();
    });

    $("#month-summarybtn").click(function(){
        $("#tableSummary").toggle();  
    })
    $("#recordbtn").click(function(){
        $("#select-to-view").toggle(); 
    })

    var userName = 'john';
    var sumArray
    // var userName = document.getElementById("#").value.toString();

    $("#name").html(userName.toUpperCase());

    // Summation of the net weight function
    function sumAll(arrayInput){
        var i;
        var sum = 0;
        for (i=0; i < arrayInput.length; i++){
            sum += arrayInput[i];
        }
        return sum
    };
    // function finalSum(){

    // }

    // Data containers
    if (userName == 'john'){
        var name = 'John Kirui'
        var email = 'john.kirui@kapkatetea.com'
        var date = ['22/01/2022','27/01/2022','07/02/2022','10/02/2022','14/02/2022','21/02/2022'];
        var weight = [30,45,61,32,23,41];
        var sumArray = sumAll(weight);     

    } else if (userName == 'jane'){
        var name = 'Jane Chepkemoi'
        var email = 'janechep@yahoo.com'
        var date = ['27/01/2022','02/02/2022','09/02/2022','13/02/2022','21/02/2022','01/03/2022'];
        var weight = [123,56,76,46,92,107];
        var sumArray = sumAll(weight);

    } else if (userName == 'roberts'){
        var name = 'Robert Langat'
        var email = 'lroberts@gmail.com'
        var date = ['02/01/2022','13/01/2022','19/01/2022','26/01/2022','03/02/2022','16/02/2022','19/02/2022','26/02/2022','04/03/2022'];
        var weight = [111,56,57,113,45,65,135,32,47];
        var sumArray = sumAll(weight);

    } else {
        alert("No records found")
    };

    
    $("#naame").text(name);
    $("#email").text(email);
    $("#totalSupplied").text(sumArray);


   
    
    //Adding an element to the array
    // function updateRecords(){
    //     var newDate = '';
    //     var newWeight = '';

    //     newDate = document.getElementById("#day").value.toString();
    //     newWeight = parseInt(document.getElementById("#weight").value);

    //     date = date.push(newDate);
    //     weight = weight.push(newWeight);

    // };

    $("#okaybutton").click(function(e){
        // updateRecords();
        e.preventDefault();
        $("#totalSupplied").text(sumAll(weight));

        $("#weightinput").hide();
        var newInput = $('input#weight').val();
        // console.log(newInput);
        sumArray = sumArray + parseInt(newInput);
        $("#totalSupplied").html(sumArray);

    });


    
})


    
