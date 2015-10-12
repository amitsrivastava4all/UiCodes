var worker = new Worker('news.js');
worker.onmessage = function (event) {
    document.getElementById("newheading").innerHTML=event.data;
    //alert("Completed " + event.data + "iterations" );
};