/**
 * Created by arnav on 8/24/2015.
 */
/*
Talk to the View Layer and Give the Data to the Model Layer
Glue B/w View and Model is called Controller
 */
window.addEventListener("load",function(){
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
});