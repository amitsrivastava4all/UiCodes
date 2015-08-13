/**
 * Created by arnav on 8/11/2015.
 */
window.addEventListener("load",function(){
document.getElementById("add").addEventListener("click",function(){
var name = document.getElementById("name");
var age =  document.getElementById("age");
if(!name){
    alert("Name Can't Be Blank or Undefined");
    return ;
}
if(!age){
    alert("Age Can't Be Blank or Undefined");
    return ;
}
name = name.value;
age = age.value;
personOperations.addPerson(name,age);

    var table = document.getElementById("personTable");
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML=name;
    row.insertCell(1).innerHTML=age;
    var deleteImage = document.createElement("img");
    deleteImage.src="images/delete.png";
    var editImage = document.createElement("img");
    editImage.src="images/edit.png";
    var cell =  row.insertCell(2);
    cell.appendChild(deleteImage);
    cell.appendChild(editImage);

//document.getElementById("personTable").
});
});