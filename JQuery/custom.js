/**
 * Created by arnav on 9/1/2015.
 */

$(document).ready(function(){
$("button:eq(2)").click(function(){
    $("div div p span").html("Shyam");
});


$(".mystyle").hover(function(){
   $(this).toggleClass("newstyle");
   // $(".mystyle").fadeOut(2000);
})
$("#clear").click(function(){
   $("input[type=text]").val("");
});

})
