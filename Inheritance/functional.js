var mammal = function(spec){
    var that = {};
    that.get_name = function(){
        return spec.name;
    };
    that.says = function(){
      return spec.name || '';  
    };
    
    return that;
};
var myMammal = mammal({name: 'herb'});

var cat = function (spec){
    spec.saying = spec.sying || 'meow';
    var that = mammal(spec);
    that.purr = function(n){
        var i, s = '';
        for(i = 0 ; i < n; i +=1){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
    };
    that.get_name = function(){
        return that.says() + '' + spec.name + ' ' + that.says();
    }
    
};

var myCat = cat({name: 'Henrietta'});
// The functional pattern also gives us a way to deal with super methods