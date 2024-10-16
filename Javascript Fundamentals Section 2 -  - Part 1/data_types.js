// In every programming language variables can have different data types

// Every Value is an object or a primitive value

// Object
let me = {
  name: "Jonas",
};

// Primitive
let firstName = "Jonas";
let age = 30;
// a value is only primitive when it is not an object

// Types of Data Types

// Number - Floating Point Numbers - used for decimals and integers
let age = 23;
// Strings - a sequence of characters - used for text
let firstName = "Jonas";
// Boolean - logical type that can only be true or false - used for taking decisions - true or false
let fullAge = true;
// Undefined - value taken by a variable that is not yet defined ('empty value)
let children;
// Null - also means empty value

// Symbol (ES2015) - value that is unique and cannot be changed

// BigInt(ES2020) - Larger integers than the Number type can hold

// JS has dynamic typing: we do not have to manually define the data type of the value stored in a variable. Instead the data types are determined automatically.
// variables just store values that have a type

/*Can also comment out text by doing the method used here */

// Data Types

true; // Boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);
// Type of Operator

console.log(typeof true); // will load a boolean type in the console
console.log(typeof 23); // will load a number type in the console
console.log(typeof "Jonas"); // will load a string type in the console

// Dynamic Typing
javascriptIsFun = "YES";
console.log(javascriptIsFun);

// Undefined value
let year;
console.log(year);
console.log(typeof year);
