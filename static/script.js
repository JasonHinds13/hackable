//search using our API
function search(){
    var item = document.getElementById("searchItem").value;
        
    $.ajax('/api/v1.0/storeAPI/'+item,{
        method: 'GET',
    }).done(function(res){

        $(".res").remove(); //remove previous results

        $(res).each(function(){
            var r = "<tr class='res'><td>"+this['name']+"</td>";
            r += "<td>"+this['quantity']+"</td>";
            r += "<td>"+this['price']+"</td></tr>";
            $("#results").append(r);
        });

    }).fail(function(err){
        $("#stat").html(err);
    });
}


