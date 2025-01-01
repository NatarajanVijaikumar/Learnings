// Purpose: To learn about variables in JavaScript

// Log check
console.log('Hello World');

// we create, read, update and delete data using variables - named storage for data
let name; // can use var but old way of doing it
name = 'Natraj'; // single =  is assignment operator
// let function is not allowed like some variables 
// use camelcase for readability

let message = 'Hello';
message = 'World'; // can update variable & will take last value  
console.log(message); // read variable

// const is for constant variables & try to use descriptive names
const interestRate = 0.3;
console.log(interestRate);

// Primitive/Value Types : string, number, boolean, undefined, null, symbol
// Reference Types : object, array, function
let favoriteFruit = 'Apple'; // string literal
let favoriteIceCream = 'Vanilla'; // string literal
let favoriteProgrammingLanguage = 'JavaScript'; // string literal

let numberOfDonuts = 12; // number literal
let pi = 3.14159; // number literal
let veryLargeNumber = 23345432111n; // bigint literal
let lovesCoding = true; // boolean literal

let favoriteColor;
console.log(favoriteColor); // undefined

favoriteFruit = null; // null is used to clear the value of a variable

const uniqueKey = Symbol('uniqueKey'); // symbol literal

let course = {
    name: 'JavaScript',
    hours: 3
};

// typeof null is object but not, but it is a bug kept for backwars compatibility in JS

// Dynamic typing - JS is dynamically typed language
let dynamicVariable = 'Hello';
console.log(typeof dynamicVariable);

dynamicVariable = 3;
console.log(typeof dynamicVariable);

dynamicVariable = true;
console.log(typeof dynamicVariable);

// use typescript for static typing

// Objects contains state and variable. They use {}. They are key-value pairs
let courses = {
    name: 'JavaScript',
    hours: 3
};

console.log(courses); // gets the object
console.log(courses.name); // gets associated key value
console.log(courses['name']); // gets associated key value different syntax

let property = 'hours';
console.log(courses[property]); // gets associated key value different syntax

// Arrays are list of items. They use []. They are indexed
let colors = ['red', 'green', 'blue'];
console.log(colors); // gets the array
console.log(colors[0]); // gets the first element and so on
console.log(colors.length); // gets the length of the array

// Functions are reusable blocks of code. They use function keyword
function greet(name) {
    console.log('Hello ' + name);
}

greet('Natraj'); // calls the function

// types of functions - named, anonymous, arrow
function multiply(a, b) {
    return a * b; // returns is needed if not will return undefined
}

console.log(multiply(2, 3)); // returns 6

// End of Program
