function Task(id,name,desc,status){
    if(taskOperations.taskList){
    this.id = taskOperations.taskList.length+1;
    }
    else{
        this.id = 1;
    }

    this.taskName = name;
    this.desc = desc;
    this.status = status;
}

var taskOperations={
    taskList:[],
    index:-1,

    addTask:function(taskObject){
        this.taskList.push(taskObject);
    },
    removeTask:function(taskObject){
        this.taskList.splice(this.searchTask(taskObject),1);
    },
    removeByIndex:function(index){
        this.taskList.splice(index,1);
    },
    updateTask:function(taskId){
        this.index = this.searchTask(taskId);
        console.log("After Calling the Search the Index is "+this.index);
        if(this.index>-1){
            this.taskList[this.index].status=!this.taskList[this.index].status;
        }

    },

    searchTask:function(taskId){
        for(var i = 0; i<this.taskList.length; i++){
            if(this.taskList[i].id==taskId){
                this.index = i;
                break;
            }

        }
        return this.index;

    }
}