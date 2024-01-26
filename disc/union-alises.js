"use strict";
function combine(num1, num2) {
    let result;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine('10', '20'));
let myUnionTest;
// only above three value assign is possible
myUnionTest = 'value1';
console.log(myUnionTest);
function printArgument(arg) {
    console.log(arg);
}
const Argument = 'werfs';
printArgument('MyArg'); //only MyArg and MyArg2 is possible to send as an argument
let userData;
userData = {
    name: '76',
    age: 76
};
console.log(userData);
//# sourceMappingURL=union-alises.js.map