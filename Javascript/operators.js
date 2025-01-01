// Purpose: To learn about operators in JavaScript

// Arithmetic Operators: +, -, *, /, %, ++, --
let a = 10;
a = a + 1; // 11
a += 1; // 12
a++; // 12 - increment by 1 after the statement
++a; // 14 - increment by 1 before the statement

// Assignment Operators: =, +=, -=, *=, /=, %=

// Comparison Operators: >, <, >=, <=

// Equality Operators: ==, ===, !=, !==
let x = 1;
let y = '1';

console.log(x == y); // true - compares values; loose equality operator only compares values
console.log(x === y); // false - compares values and types; strict equality operator compares values and types

// Ternary Operator: condition ? true : false ; can conditionally assign values
let points = 110;
let type = points > 100 ? 'gold' : 'silver'; // gold; can be used in place of if-else

// Logical Operators: &&, ||, ! ; can combine multiple conditions
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; // true - AND operator
let applicationRefused = !eligibleForLoan; // false - NOT operator

// null coalescing operator: ?? ; used to assign default values
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor ?? defaultColor; // red; if userColor is null or undefined, then defaultColor is assigned

// Logical Operators with Non-Boolean Values: Falsy (false, undefined, null, 0, '', NaN) and Truthy (anything not falsy)
// Does short circuit evaluation and goes left to right

// Operator Precedence: order of operations in JavaScript - PEMDAS

// End of Program
