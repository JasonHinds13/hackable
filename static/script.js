//test our API
$(document).ready(function(){
    $.ajax('/api/v1.0/storeAPI',{
        method:'GET'
    }).done(function(res){
        console.log(res);
    }).fail(function(err){
        console.log(err);
    });
});

function search(){
    var loc = document.getElementById("searchItem").value;
    location.href= loc;
}


