// Purpose: To learn about control flow in JavaScript

// If-Else Statements in JavaScript 
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Switch Statements in JavaScript used in Equality Comparison ; Same as above but easier to implement
let grade = 'A';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Invalid Grade");
}

// For Loop in JavaScript; Useful for running code multiple times makes code more efficient when no of iterations is known
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop in JavaScript; Used when no of iterations is not known
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-While Loop in JavaScript; Similar to while loop but runs atleast once and not used much
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Infinite loops should not happen, so specify a condition to break out of the loop

// For in Loop in JavaScript; Used to iterate over the properties of an object
const person = {
    name: 'John',
    age: 30
};
for (let key in person) {
    console.log(key, person[key]);
}

// For of Loop in JavaScript; Used to iterate over the elements of an array
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// Break is used to exit the loop and Continue is used to skip the current iteration

// End of Program
