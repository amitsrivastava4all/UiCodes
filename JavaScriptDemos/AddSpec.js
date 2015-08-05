/**
 * Created by arnav on 12/2/2014.
 */
describe("add",function(){
    it("should be able to add two numbers",function(){
        var firstNo = 10;
        var secondNo = 20;
        var expectedResult = 130;
        var result = add(firstNo,secondNo);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two string formats",function(){
        var firstNo = "10";
        var secondNo = "20";
        var expectedResult = 30;
        var result = add(firstNo,secondNo);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two string characters formats",function(){
        var firstNo = "amit";
        var secondNo = "20";
        var expectedResult = 20;
        var result = add(firstNo,secondNo);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add one Argument only",function(){
        var firstNo = 10;

        var expectedResult = 10;
        var result = add(firstNo);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add no arguments",function(){

        var expectedResult = 0;
        var result = add();
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two arrays ",function(){

        var array1 = [10,20];
        var array2 = [30,40];
        var expectedResult = 100;
        var result = add(array1,array2);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add Variable number of arguments ",function(){

        var x = 1,
            y = 2,
            z = 3,
            s = 4;
        var expectedResult = 10;
        var result = add(x,y,z,s);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two functions as arguments ",function(){

      var x = function(){ return 10;};
      var y = function(){ return 20 ; };
        var expectedResult = 30;
        var result = add(x,y);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add Array of functions as arguments ",function(){

        var x = function(){ return 10;};
        var y = function(){ return 20 ; };
        var expectedResult = 30;
        var result = add([x,y]);
        expect(result).toBe(expectedResult);
    });
    it("should be able to add Array of functions (String) as arguments ",function(){

        var x = function(){ return "amit";};
        var y = function(){ return 20 ; };
        var expectedResult = 20;
        var result = add([x,y]);
        expect(result).toBe(expectedResult);
    });
})