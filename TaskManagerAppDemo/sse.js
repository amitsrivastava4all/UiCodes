var source = new EventSource("serverfilename");
source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};