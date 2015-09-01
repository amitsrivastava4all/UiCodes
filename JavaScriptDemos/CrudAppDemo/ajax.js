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
    //var xmlHttpRequest = getXMLHttpRequest();
    var xmlHttpRequest = new window.XMLHttpRequest();
    //alert ("xmlHttpRequest=" + xmlHttpRequest);

    xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest); // Asynch
    // 0 Means XMLHttpRequest Object is Created but request URL is not OPen
    console.log("After OnReady State Change "+xmlHttpRequest.readyState);
    xmlHttpRequest.open("GET", "productdata.json", true);
    console.log("After URL ");
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
                    localStorage.ajaxdata=xmlHttpRequest.responseText;
                    //document.getElementById("divId").innerHTML = xmlHttpRequest.responseText;
                } else {
                    alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
                }
            }
        };
}