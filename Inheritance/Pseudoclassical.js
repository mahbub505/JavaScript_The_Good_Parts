var Mammal = function (name){
    this.name = name;
}
Mammal.prototype.get_name =  function (){
    return this.name;
}
Mammal.prototype.says = function (){
    return this.saying || '';
}
//make an instance
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();// Herb the Mammal
//document.writeln(name);

//We can make another pseudoclass that inherits from Mammal by defining its
//constructor function and replacing its prototype with an instance of Mammal:


var Cat = function (name){
    this.name = name;
    this.saying = 'meow';
}
//Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

Cat.prototype.purr = function(n){
    var i, s = '';
    for(i = 0;i< n; i ++){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
};

Cat.prototype.get_name = function(){
    return this.says() + ' ' + this.name + ' ' + this.says();
}

var myCat = new Cat('Henrietta');
var says = myCat.says();// 'meow'
var purr = myCat.purr(5);//'r-r-r-r-r'
var name = myCat.get_name();// 'meow Henrietta meow'

document.writeln(name);

Function.method('inherits' , function(Parent){
   this.prototype = new Parent(); 
   return this;
});


var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}.
        inherits(Mammal).
        method('purr', function (n) {
            var i, s = '';
            for (i = 0; i < n; i += 1) {
                if (s) {
                    s += '-';
                }
                s += 'r';
            }
            return s;
        }).
        method('get_name', function ( ) {
            return this.says( ) + ' ' + this.name +
                    ' ' + this.says( );
        });
