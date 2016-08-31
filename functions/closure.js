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
                alert(e);
            };
        }(i);
    }
};
add_the_handlers(document.body);