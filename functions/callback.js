//A callback function is called at the completion of a given task. 
// For node JS  
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
//Now run the main.js to see the result:
//
//$ node main.js
//Verify the Output
//
//Program Ended
//text
//to teach the world in simple and easy way!!!!!
//
//
//
/*Note that the item in the click method's parameter is a function, not a variable.​
​//The item is a callback function*/


$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});