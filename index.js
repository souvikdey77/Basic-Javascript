// This is for comment
console.log('Hello World');

//------Variable---------

//variable can't start with a number
//can't contain a space or hyphen
//case sensitive
let name = 'Aravind';
console.log(name);


//------------Constant-------------
// if we don't want to reasign the value again, we need to use const

const interestRate = 0.1;
//interestRate = 0.2;// not possible

//--------------Primitive Types----------
// String, number, boolean, undefined, null

let name1 = 'Arnab'; //String
let isBoolean = true; // boolean
let age = 30; // Number
let firstName = undefined;
let selectedColor = null;

console.log(typeof (name1));
console.log(typeof (isBoolean));
console.log(typeof (age));
console.log(typeof (firstName));
console.log(typeof (selectedColor));

//-----------------Reference Types-------------
// object, array, function

let person = {
    firstName: 'Aravind',
    age: 30
}
console.log(person);