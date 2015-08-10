/**
 * Created by arnav on 8/10/2015.
 */
window.addEventListener("load",function(){
document.getElementById("b2").addEventListener("click",function(){
    var selectVar = document.getElementsByTagName("select")[0];
    if(selectVar){
        var methodName = selectVar.value;
        console.log("Method Operation is "+methodName);
        var firstValue = document.getElementById("firstNum");
        var secondValue = document.getElementById("secondNum");

        firstValue = firstValue?parseInt(firstValue.value)?parseInt(firstValue.value):0:0;
        secondValue = secondValue?parseInt(secondValue.value)?parseInt(secondValue.value):0:0;
        console.log(firstValue+" "+secondValue);
        //secondValue = firstValue?secondValue.value:0;

       // mathOperations.add(firstValue,secondValue);
        var result = mathOperations[methodName](firstValue,secondValue);
        document.getElementById("result").innerHTML=result;
    }

});
});