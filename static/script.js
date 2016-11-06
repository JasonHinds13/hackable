//Using our API

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

function addItem(){
    var name = document.getElementById("itemName").value;
    var quan = document.getElementById("itemQuantity").value;
    var price = document.getElementById("itemPrice").value;

    var dat = {'name':name, 'quantity':quan, 'price':price};

    $.ajax('/api/v1.0/storeAPI',{
        method: 'POST',
        data: JSON.stringify(dat),
        dataType: "json",
        contentType: "application/json",
    }).done(function(res){
        $("#stat").html("Successfully Added");
    }).fail(function(err){
        $("#stat").html("Error Sending Request");
    });
}




