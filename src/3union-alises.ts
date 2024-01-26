// union type
type possibleDataType = string | number;  // use type alise
function combine(num1: possibleDataType, num2: possibleDataType) {
    let result: number | string;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine('10', '20'));

// litral type
type possibleVal = 'value1' | 'value2' | 'value3'  // we used type alise here
let myUnionTest: possibleVal;

// only above three value assign is possible
myUnionTest = 'value1';
console.log(myUnionTest);
function printArgument(arg: 'MyArg' | 'MyArg2') {
    console.log(arg);
}
const Argument = 'werfs';
printArgument('MyArg');   //only MyArg and MyArg2 is possible to send as an argument

//custom type using type alise
type User = {
    name: string,
    age: number
}
let userData: User;
userData = {
    name: '76',
    age: 76
}
console.log(userData);