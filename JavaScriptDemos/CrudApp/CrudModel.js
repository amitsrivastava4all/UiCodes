/**
 * Created by arnav on 8/11/2015.
 */
    //SingleTon
var personOperations={
    personList:[],
    addPerson:function(name,age){

        var person = new Person(name,age);
        this.personList.push(person);
    }
}
