// const person = {
//     p_name: 'Ajay',
//     p_age: 26
// }
// console.log(person.p_surname);

// if we are using p_surname property and this property not present in person 
// we can force person object to have p_surname property by providing type to object

let person: {
    p_name: string,
    p_age: number,
    p_surname?: string,
} = {
    p_name: 'string',
    p_age: 34,
};
console.log(person);

// Nested Object
const product: {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

// Array Type
let strArr: (string)[];
// strArr = 'asdf';   // not Allowed
// strArr = [10] // not allowed
// strArr = [];  // Allowed
strArr = ['first', 'secound', 'third'];
for (let val of strArr) {
    console.log(val.toUpperCase()); //Allow to Access toUpperCase method because he know val is string 
}
console.log(strArr);

// below syntax allow to store string or number element in array
// we can also called it as union type
let arr2: (string | number)[];
arr2 = [];
arr2 = [10, 20, 'asdas'];
// arr2 = [{}];  // not allowed
// arr2 = [true]  // not allowed

// Another Example of union type
let unionTest: string | number;
unionTest = 10;
console.log('Union Test Val1 ', unionTest);
unionTest = 'sdzc';
console.log('Union Test Val2 ', unionTest);

// tuple type
// tuple type we used if we want fixed number of element with fixed type
let tupleArr: [number, string];
// tupleArr = [];  // not allowed empty array
// tupleArr = [10] // not allowed want fixed number
// tupleArr = ['str']  // not allowed
// tupleArr = [10, 'dsf', 56] // not allowed
tupleArr = [10, 'str'];

// Enume
enum Role {
    ADMIN = 'admin',
    AGENT = 'agent',
    GUEST = 'guest'
}
let person2: {
    role: Role
} = {
    // role: 'admin'  // not Allowed
    role: Role.ADMIN  // Allowed
};

if (person2.role === Role.ADMIN) {
    console.log('person role is admin');
}
//1] in future we want to change admin value to something else then we
// just need to change it in enum only one location

const fff = 'admin';
let roleOfUser: Role;
// roleOfUser = fff; // not allowed
roleOfUser = Role.ADMIN  // Allowed
console.log(roleOfUser);

let dynamicVal = 'admin'
switch(dynamicVal) {
    case Role.ADMIN :
      console.log('admin');
      break;
    case Role.AGENT : 
      console.log('agent');
      break;
    case Role.GUEST :
      console.log('guest');
      break
    default:
      console.log('nothing match');
}