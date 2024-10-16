// An operator allows us to transform or combine multiple values
// - mathamatical operators
// - comparison operators
// - logical operators
// - etc

// - Arithmatic Operator
const now = 2037;
const ageJohn = now - 1991;
const ageSara = now - 2000;
// const ageJohn = 2037 - 1996;
// const ageSara = 2037 - 2006;
console.log(ageSara, ageJohn);
// pushes out the value of age

console.log(ageSara * 2);
console.log(ageSara * 2, ageJohn / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Jones";
console.log(firstName + "" + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x  * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

// Comparison operators
console.log(ageJohn > ageSara); // results in true or false. >, <, >= , <=
console.log(ageSara >= 18); // is she greater or equal to 18 = true

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2020); //Math occur before the comparison operators

// Operator precedence MDN webdocs
console.log(25 - 10 - 5); //left to right operation

let x, y;
x = y = 25 - 10 - 5; // x=y=10 operated from right to left x=10
console.log(x, y); //x & y = 10

// const averageAge = ageJohn + ageSara / 2;
const averageAge = (ageJohn + ageSara) / 2; // parenthesis operated first then the division
console.log(ageJohn, ageSara, averageAge); //
