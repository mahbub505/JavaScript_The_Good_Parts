var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
empty[1] // undefined
numbers[1] // 'one'
empty.length // 0
numbers.length // 10
var numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
};
//produces a similar result

var misc = [
'string', 98.6, true, false, null, undefined,
['nested', 'array'], {object: true}, NaN,
Infinity
];
misc.length // 10

var myArray = [];
myArray.length // 0
myArray[1000000] = true;
myArray.length // 1000001
// myArray contains one property.
//length  is less than 4,294,967,295

numbers.length = 3;
// numbers is ['zero', 'one', 'two']
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']

numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']