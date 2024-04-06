// 1. Hello Variable
let greeting = "Hello, World!";
console.log(greeting, "=======ans1");

// 2. Basic Math
let num1 = 20;
let num2 = 10;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log(sum, difference, product, quotient);

// 3. Swapping Values
//   b = 2; // Swap these values without using a new variable.
// let a = 1,
//   b = 2;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, "====a", b, "======b`");

// 4. Type Annotation (TypeScript)
let message: string;
// message = 15;

// 5. Modulus Operator
// Instructions: Use the modulus operator to find the remainder of two numbers.
let number1 = 11,
  number2 = 2;
let remainder = number1 % number2;
console.log(remainder);

// 6. Increment Challenge
// Instructions: Increment a variable's value by 1 using two different methods.
let counter = 1;
let increasedValue1 = counter++;
let increasedValue2 = counter + 1;

// 6.  Logical gates
let a = true,
  b = false,
  c = true; // Write expressions using these.

let and = a && b && c;
let or = a || b || c;
let notA = !a;
let notB = !b;
let notC = !c;

// 8. Compound Assignment
let num = 10; // Use +=, -=, *=, and /= on this variable.
let increment = (num += 2); //12
let decrement = (num -= 2); //8
let multiplication = (num *= 2); //20
let division = (num /= 2); //5

// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.

let value: number = 20;
let isEven = value % 2 == 0;
if (isEven) {
  console.log(`Number ${value} is even`);
} else console.log(`Number ${value} is odd`);

//10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.

let age: number = 26; // Check if age is 18 or older to determine voting eligibility.
let isEighteen = age >= 18;
if (isEighteen) {
  console.log("You are eligible to vote!");
} else console.log("Sorry! You are under age.");

// 11. Grading System
// Instructions: Assign a grade based on a numerical score.

let score: number = 65;
let grade: string; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Your grade is ${grade}`);

// 12. Max of Three
// Instructions: Find the maximum of three numbers.

let x = 100,
  y = 20,
  z = 50; // Determine the largest among these.
if (x > y && x > z) {
  console.log(`${x} is the largest number`);
} else if (y > x && y > z) {
  console.log(`${y} is the largest number`);
} else {
  console.log(`${z} is the largest number`);
}

// Optimized solution
let largest = Math.max(x, y, z);
console.log(`${largest} is the largest number`);
