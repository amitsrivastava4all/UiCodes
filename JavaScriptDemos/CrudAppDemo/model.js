/**
 * Created by arnav on 8/24/2015.
 */
/*
Model Class Contains the Logic
This Logic is Related to the Product
AddProduct
This class must be Singleton Class
 */
var productOperations={
    productList:[],
    addProduct:function(productDetailObject ){
        this.productList.push(productDetailObject);
    },
    deleteProduct:function(productDetailObject){
        var searchIndex = -1;
        this.productList.forEach(function(productObj,index){
            if(productObj.sno==productDetailObject.sno && productObj.productName==productDetailObject.productName){
                searchIndex = index;

                //this.productList.splice(index,1);
            }
        });
        if(searchIndex>-1){
        this.productList.splice(searchIndex,1);
        }
        //console.log("After Delete "+this.productList);
        return searchIndex;
    }


}


