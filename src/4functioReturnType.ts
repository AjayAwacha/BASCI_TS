// return type of add function is number
// typescript implicitlly add this type not need to add like
// function add(n1: number, n2: number): number {

function addValue(n1: number, n2: number) {
    return n1 + n2;
}
console.log(addValue(10, 20));

// print function has void type means not return anything
// function return undefined if not set
function printConsol() {
    console.log('print function');
    // return; //we can use returntype as undefined and void
}
printConsol();

// function type
// let combineType: Function;  // we can assign any function to combineType variable
let combineType: (a: number, b: number) => number;
combineType = addValue;
// combineType = printConsol;  // not allowed
// combineType = 5;  // give runtime error combineType is not function
console.log(combineType(10, 100));

// callback function return type
function addAndHandle(n1: number, n2: number, sub: (arg: number) => void) {
    const result = n1 + n2;
    sub(result);
}
function printResult(result: number) {
    console.log(result);
    return true;
}
addAndHandle(100, 200, printResult);
