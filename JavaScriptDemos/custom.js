/**
 * Created by arnav on 8/3/2015.
 */
function add(){
    var firstValue = parseInt(document.getElementById("firstNum").value);
    var secondValue = parseInt(document.getElementById("secondNum").value)
    if(!firstValue){
        firstValue = 0;
    }
    if(!secondValue){
        secondValue = 0;
    }
    document.getElementById("msg").innerHTML = firstValue + secondValue;

}
function callMe(){
    if(document.getElementById("b1").value=="logout"){
        document.getElementById("b1").innerHTML="<b>Log In</b>";
        document.getElementById("b1").value="login";

    }
    else
    if(document.getElementById("b1").value=="login"){
        document.getElementById("b1").innerHTML="<i>Log Out</i>";
        document.getElementById("b1").value="logout";
    }

    /*document.getElementById("b1").value="logout";
     document.getElementById("b1").innerHTML="Log Out";
     document.getElementById("msg").innerHTML="User Logout";*/
    //alert("Call Me");
}