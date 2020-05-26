// 2-2_main.js
var calc = require("./2-1_module");
var calc2 = require("./2-3_module2");

a = 10;
b = 20;

console.log(calc.add(a, b));
console.log(calc.sub(a, b));

/*
console.log(calc.calc.add(a, b));
console.log(calc.calc.sub(a, b));   // exports.calc = myCalc;
*/

console.log(calc2.mul(a, b));
console.log(calc2.div(a, b));
