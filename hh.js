$(document).ready(function(){

    dpick('#year','#month','#day',1);
});

function dpick(year,month,day,td){
    if(td==1){
        var today = new Date();
        $(year).val(today.getFullYear());
        $(month).val(today.getMonth());
    }
    $(year).change(function(){
        dpick(year,month,day);
    });
    $(month).change(function(){
        dpick(year,month,day);
    }); 
    var month_val = $(month).val();
    var i=0;
    $(day).empty();
    if(month_val=="1"){
        if($(year).val()%4 == 0){
            for(i=1;i<=29;i++){
                $(day).append($("<option></option>").attr("value", i).text(i));
            }
        }else{
            for(i=1;i<=28;i++){
                $(day).append($("<option></option>").attr("value", i).text(i));
            }
        }
    }
    else if(month_val=="8" || month_val=="3" || month_val=="5" || month_val=="10"){
        for(i=1;i<=30;i++){
            $(day).append($("<option></option>").attr("value", i).text(i));
        }
    }
    else{
        for(i=1;i<=31;i++){
            $(day).append($("<option></option>").attr("value", i).text(i));
        }
    }
    if(td==1){
        $(day).val(today.getDate());
    }
}