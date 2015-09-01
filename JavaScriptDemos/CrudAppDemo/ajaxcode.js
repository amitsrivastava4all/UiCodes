/**
 * Created by arnav on 8/31/2015.
 */
function doAjax(){
    var ajaxObject = new window.XMLHttpRequest();
    ajaxObject.onreadystatechange=stateChange(ajaxObject);
    var url = "https://freegeoip.net/json/"+document.getElementById("hostName").value;
    ajaxObject.open("GET",url);
    ajaxObject.send(null);

}

function stateChange(ajaxObject){

    return function(){
        if(ajaxObject.readyState==4){
            if(ajaxObject.status==200){
                var json= ajaxObject.responseText;
                var hostObject = JSON.parse(json);
                var data = "";
                for(key in hostObject){
                    data = data +" "+ key +" "+hostObject[key]+"  ";
                }

               document.getElementById("result").innerHTML=data;
            }
        }
    }
}