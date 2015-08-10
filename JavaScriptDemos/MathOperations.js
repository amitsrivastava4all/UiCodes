/**
 * Created by arnav on 8/10/2015.
 */
var mathOperations={
    add:function(){
        var sum = 0;
        for(var i = 0 ; i<arguments.length; i++){
            sum = sum + arguments[i];
        }
        return sum;
    },
    subtract:function(x,y){
        return x - y;
    },
    multiply:function(x,y){
        return x * y;
    }


}