/**
 * Created by arnav on 8/24/2015.
 */
/*
Talk to the View Layer and Give the Data to the Model Layer
Glue B/w View and Model is called Controller
 */
function fetchData(){
    if(localStorage.productjson){
        var productArray = JSON.parse(localStorage.productjson);
        var tableObject = document.getElementById("tab1");
        for(var i = 0; i<productArray.length; i++){
            var product = new ProductDetails(productArray[i].sno,productArray[i].productName);
            productOperations.addProduct(product);
        var row = tableObject.insertRow(tableObject.rows.length);
        row.insertCell(0).innerHTML=productArray[i].sno;
        row.insertCell(1).innerHTML=productArray[i].productName;
        }
    }

}

window.addEventListener("load",function(){
  fetchData();
document.getElementById("add").addEventListener("click",function(){
var sno = document.getElementById("sno");
var productName = document.getElementById("productName");
if(sno && productName){
    sno = sno.value;
    productName = productName.value;
    var product = new ProductDetails(sno,productName);
    productOperations.addProduct(product);
    var tableObject = document.getElementById("tab1");
    var row = tableObject.insertRow(tableObject.rows.length);
    row.insertCell(0).innerHTML=sno;
    row.insertCell(1).innerHTML=productName;
    var deleteLink = document.createElement("a");
    deleteLink.href="#";
    deleteLink.addEventListener("click",function(){
        var index = productOperations.deleteProduct(product);
        if(index>=0){
            index = index + 1;
        }
        document.getElementById("tab1").deleteRow(index);
    });
    var img = document.createElement("img");
    img.src="images/delete.png";
    deleteLink.appendChild(img);
    row.insertCell(2).appendChild(deleteLink);
}
});
document.getElementById("savetemp").addEventListener("click",function(){
        var productList = productOperations.fetchList();
        var json = JSON.stringify(productList);
        localStorage.productjson=json;
        // Ajax Call
    });
    document.getElementById("loadFromServer").addEventListener("click",function(){
                // Ajax Call
        makeRequest();
        if(localStorage.ajaxdata) {
            var tableObject = document.getElementById("tab1");
            var productArray =  JSON.parse(localStorage.ajaxdata);
            for (var i = 0; i < productArray.length; i++) {
                var product = new ProductDetails(productArray[i].sno, productArray[i].productName);
                productOperations.addProduct(product);
                var row = tableObject.insertRow(tableObject.rows.length);
                row.insertCell(0).innerHTML = productArray[i].sno;
                row.insertCell(1).innerHTML = productArray[i].productName;
            }
        }
    });
});