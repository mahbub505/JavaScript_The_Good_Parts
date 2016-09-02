//var add_the_handlers = function (nodes) {
//    var i;
//    for (i = 0; i < nodes.length; i += 1) {
//        nodes[i].onclick = function (i) {
//            return function (e) {
//                alert(e);
//            };
//        }(i);
//    }
//};
//add_the_handlers(document.body);


var add_the_handlers = function (nodes){
    var i;
    for(i = 0 ; i< nodes.length; i+=1){
        nodes[i].onclick = function(i){
            return function (e){
                alert(e);
            }
        }(i);
    }
}
add_the_handlers(document.body);