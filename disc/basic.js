"use strict";
// Basic Type
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 10;
const number2 = 9.2;
console.log(add(number1, number2));
// js is dynamically types and ts is statically typed
let d = 10;
//d = '20'  // not possible in typescript
let result = 10; // not good practice
let result2; // good practice
let numEx = 10;
let strEx = 'str';
let boolEx = true;
typeChecking(numEx, strEx, boolEx);
function typeChecking(var1, var2, var3) {
    // good practice to assign type to function variable
    // because they create seprate copy inside function and that's why
    // outside type is not work inside function
    // like outside fun var1 is numEx and type number but we modified it with string
    var1 = 'asdasdas';
    console.log(var1);
    console.log(var2);
    console.log(var3);
}
//# sourceMappingURL=basic.js.map