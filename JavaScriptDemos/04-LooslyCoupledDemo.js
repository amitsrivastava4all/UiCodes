/**
 * Created by arnav on 12/2/2014.
 */
function add(x,y){
    var z = 0;
    var temp = 0;
    var isArrayFlag = false;
    console.log(" X "+x+" And Y "+y);
    console.log("Type of x "+typeof (x)+" and Type of y "+typeof (y));

    if(typeof (x)==="function"){
        x = x();
    }
    if(typeof (y)==="function"){
        y = y();
    }
    else
    if(x && x instanceof Array){
        isArrayFlag = true;
        for(i in x){
            console.log("X Array "+x[i]+ " typeof i "+typeof (x[i]));
            if(typeof (x[i])==="function"){
                temp = x[i]();
                temp = isNaN(temp) ? 0 : temp;
            }
            else {
                temp = isNaN(x[i]) ? 0 : x[i];
            }
            z = z + temp;

        }
        console.log("X Array Sum is "+z);
    }
    if(y && y instanceof Array){
        isArrayFlag = true;
        for(i in y){
            console.log("Y Array "+y[i]+ " typeof i "+typeof (y[i]));
            if(typeof (y[i])==="function"){
                temp = y[i]();
                temp = isNaN(temp) ? 0 : temp;
            }
            else {
                temp = isNaN(y[i]) ? 0 : y[i];
            }
            z = z + temp;
        }
        console.log("Y Array Sum is "+z);
    }
    if(isArrayFlag){
        return z;
    }
    else
    if(arguments.length>2){
        for(var i = 0; i<arguments.length; i++){
            temp = isNaN(arguments[i])?0:parseInt(arguments[i]);
            z = z + temp;
            console.log("Argument Loop temp "+temp[i] +" Z "+z);

        }
        console.log("Sum in Var-Args "+z+" Arguments Length is "+arguments.length);
        return z;
    }
    else {
        x = isNaN(x) ? 0 : parseInt(x);
        y = isNaN(y) ? 0 : parseInt(y);
    }
    z = x + y;
    console.log("Sum is "+z);
    return z;
}

// When ever u invoke a function two things are passed by default
// 1. this
// 2. arguments  -- it is array like object , it has length property and indexer like arguments[0]

//***************** Use of this ******************************
var emp = {};
emp.name='Amit';
emp.whoAmI= function(){
    console.log("My Name is "+this.name);
    console.log("My Name is "+name);
}
function whoAmI(){
    console.log("My Name is "+this.name);
}
whoAmI(); // now this keyword refer to the global object becuase it is not call with an object
emp.whoAmI=whoAmI();
emp.whoAmI(); // now this keyword refer to the emp object
window.name="Chrome";  // it set the global name attribute so simple whoAmI() refer to window object

var dept={};
dept.name='IT';
dept.print=whoAmI();
dept.print(); // now it will print IT
// So it means depends on the object context this keyword decide for which it will be going to attach
window.whoAmI(); // now it will print chrome , so it means if a function is called alone , so it will call
// using window object



