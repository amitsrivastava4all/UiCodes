window.addEventListener("load",function(){
    loadJSON();
document.getElementById("add").addEventListener("click",addTask);
document.getElementById("remove").addEventListener("click",removeAllCompleteTask);
document.getElementById("save").addEventListener("click",saveTask);

});

function addTask(){
    var taskName = document.getElementById("taskName").value;
    var taskdesc = document.getElementById("taskDesc").value;
    var taskObject = new Task(taskName,taskdesc,false);
    taskOperations.addTask(taskObject);
    var ulTag = document.getElementsByTagName("ul")[0];
    var liTag = document.createElement("li");
    liTag.innerHTML=taskOperations.taskList.length+" "+ taskName+" : "+taskdesc;
    ulTag.appendChild(liTag);
    liTag.addEventListener("click",toogleTask);

}

function toogleTask(event){
    console.log("Source Element is "+event.srcElement.innerHTML);
    event.srcElement.classList.toggle("completeTask");
    var array = event.srcElement.innerHTML.split(" ");
    var taskId = array[0];
    console.log("Id "+taskId);
    taskOperations.updateTask(taskId);
}

function removeAllCompleteTask(){
    var tags = document.getElementsByTagName("li");
    for(var  i = 0 ; i<tags.length; i++){

        if(tags[i].classList.contains("completeTask")){
            tags[i].remove();
            taskOperations.removeByIndex(i);
        }
    }

}

function saveTask(){
   localStorage.taskjson=JSON.stringify(taskOperations.taskList);
    //Show a Notification
    Notification.requestPermission(function(){
        var n = new Notification("TaskManager-Application : By Amit Srivastava", {
            body : "Hello User , Your Data is Save in Your Browser",
            icon : "images/save.png"
        });
        document.getElementById("audio").play();
        setTimeout(function(){
            n.close();
            document.getElementById("audio").pause();
            document.getElementById("audio").currentTime=0;
        },7000);

    });
}
function loadJSON(){
    if(localStorage.taskjson){

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
    }
    else{
        makeRequest();

    }

}


