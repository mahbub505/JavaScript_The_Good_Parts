//Since JavaScript’s arrays are really objects
//for in makes no guarantee
//about the order of the properties

// It is controlled by three
//clauses—the first initializes the loop, the second is the while condition, and the third
//does the increment:
var i;
for (i = 0; i < myArray.length; i += 1) {
document.writeln(myArray[i]);
}