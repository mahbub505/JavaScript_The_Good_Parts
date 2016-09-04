var myMammal = {
    name : 'Herb the Mammal',
    get_name: function(){
        return this.name;
    },
    says: function(){
        return this.saying || '';
    }
};
//Once we have an object that we like, we can make more instances with the Object.
//create method from Chapter 3. We can then customize the new instances:


var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purry = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;

};
myCat.get_name = function () {
    return thsi.says() + ' ' + this.name + ' ' + this.says();
}



