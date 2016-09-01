//http://javascriptissexy.com/understand-javascript-closures-with-ease/
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var mjName = celebrityName ("Michael");
/* At this juncture, the celebrityName outer function has returned.​
​​// The closure (lastName) is called here after the outer function has returned above​
​// Yet, the closure still has access to the outer function's variables and parameter​*/
//mjName ("Jackson"); // This celebrity is Michael Jackson
document.writeln(mjName ("Jackson"));

var quo = function (status){
    return{
        get_status:function (){
            return status;
        }
    }
}
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

// Define a function that sets a DOM node's color
// to yellow and then fades it to white
var fade = function(node){
    var level = 1;
    var step = function (){
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if(level < 15){
            level += 1;
            setTimeout(step,100);
        }
    };
    setTimeout(step,100);
};
fade(document.body);

// BAD EXAMPLE
// Make a function that assigns event handler functions to an array of nodes the
//wrong way.
// When you click on a node, an alert box is supposed to display the ordinal of the
//node.
// But it always displays the number of nodes instead.

var add_the_handlers = function (nodes){
    var i;
    for (i = 0; i < nodes.length; i +=1){
        nodes[i].onclick = function (e){
            alert(i);
        }
    }
}
// BAD end

// Better
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                
                return function(y, x){
                    alert();
                }
            }(4, 5);
        }(i);
            }
};
add_the_handlers(document.body);














var b = 3;
function a(g){
    console.log(g, "Main G");
    return function(g){
        
        return function(d){
            
        }
        console.log(g, "MainCHild G");
        console.log(g, "Child g")
    }(7);
}

a(b)(5);





















