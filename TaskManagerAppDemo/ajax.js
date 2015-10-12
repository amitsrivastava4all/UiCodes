/**
 * Created by arnav on 8/26/2015.
 */
function getXMLHttpRequest() {
    var xmlHttpReq;
    // to create XMLHttpRequest object in non-Microsoft browsers
    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            //to create XMLHttpRequest object in later versions of Internet Explorer
            xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (exp1) {
            try {
                //to create XMLHttpRequest object in later versions of Internet Explorer
                xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (exp2) {
                //xmlHttpReq = false;
                alert("Exception in getXMLHttpRequest()!");
            }
        }
    }
    return xmlHttpReq;
}

/*
 * AJAX call starts with this function
 */
function makeRequest() {
    var xmlHttpRequest = getXMLHttpRequest();
   // var xmlHttpRequest = new window.XMLHttpRequest();
    //alert ("xmlHttpRequest=" + xmlHttpRequest);

    xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest); // Asynch
    // 0 Means XMLHttpRequest Object is Created but request URL is not OPen
    //console.log("After OnReady State Change "+xmlHttpRequest.readyState);
    xmlHttpRequest.open("GET", "tasks.json?echo=1", true);
    //console.log("After URL ");
    // alert("inside makeRequest()!");
    xmlHttpRequest.send(null);
    //alert("sent!");
}

/*
     * Returns a function that waits for the state change in XMLHttpRequest
     */
    function getReadyStateHandler(xmlHttpRequest) {
        console.log("Here....");
        // an anonynous function returned
        // it listens to the XMLHttpRequest instance
        return function() {
            console.log("Ajax Call Start "+xmlHttpRequest.readyState);
            if (xmlHttpRequest.readyState == 4) {
                if (xmlHttpRequest.status == 200) {
                    console.log("Data Coming From Server "+xmlHttpRequest.responseText);
                    localStorage.taskjson=xmlHttpRequest.responseText;
                    console.log("After Ajax Call "+localStorage.taskjson);
                    var ulTag = document.getElementsByTagName("ul")[0];
                    var taskListData = JSON.parse(localStorage.taskjson);
                    //var taskListData = localStorage.taskjson;
                    taskOperations.taskList=taskListData;
                    // Code for Loading the Data
                    taskListData.forEach(function(taskListObject,index){

                        var liTag = document.createElement("li");

                        liTag.innerHTML=taskListObject.id+" "+ taskListObject.taskName+" : "+taskListObject.desc;
                        if(taskListObject.status){
                            liTag.classList.add("completeTask");
                        }
                        ulTag.appendChild(liTag);
                        liTag.addEventListener("click",toogleTask);
                    });
                    //document.getElementById("divId").innerHTML = xmlHttpRequest.responseText;
                } else {
                    alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
                }
            }
        };
}