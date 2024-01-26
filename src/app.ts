console.log('app.ts compiled1');
let unUnsed;
const btn = document.getElementById('btn2');
console.log(btn);
btn?.addEventListener('click', () => {
    console.log('btn click');
})

// function unUnsedVariable(arg) {
//     let testUnused = 'sdvxcv';
// }
// unUnsedVariable('xcvxcvcx');

// void mean not return anything
// not return startment
// return;
function doSomething(): void {
    return;
}

