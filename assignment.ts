// 1. Hello Variable
let greeting = "Hello, World!";
console.log(greeting, "=======ans1");

// ---------------------------------------------------------------------------

// 2. Basic Math
let num1 = 20;
let num2 = 10;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log(
  `Sum is ${sum}, difference is ${difference}, Product is  ${product}, Division gives ${quotient}`
);

// --------------------------s-------------------------------------------------

// 3. Swapping Values
// b = 2; // Swap these values without using a new variable.
let a = 1,
  b = 2;

a = a + b;
b = a - b;
a = a - b;
console.log(a, "====a", b, "======b");

// ---------------------------------------------------------------------------

// 4. Type Annotation (TypeScript)
let message: string;
// message = 15;

// ---------------------------------------------------------------------------

// 5. Modulus Operator
// Instructions: Use the modulus operator to find the remainder of two numbers.
let number1 = 71,
  number2 = 4;
let remainder = number1 % number2;
console.log(remainder, "===========remainder");

// ---------------------------------------------------------------------------

// 6. Increment Challenge
// Instructions: Increment a variable's value by 1 using two different methods.
let counter = 1;
let increasedValue1 = ++counter;
let increasedValue2 = counter + 1;

console.log(increasedValue1, "=========increaseValue1");
console.log(increasedValue2, "=========increaseValue2");
// ---------------------------------------------------------------------------

// 7.  Logical gates
let u = true,
  v = false,
  w = true; // Write expressions using these.
console.log(u && v && w, "======and");
console.log(u || v || w, "======or");
console.log((u || v) && w, "======distirbutiveAnd");
console.log((u && v) || w, "======distributiveOr");
console.log((u || w) && v, "======distributiveAndFalse");
console.log(!u, "======notA");
console.log(!v, "======notB");
console.log(!w, "======notC");
// ---------------------------------------------------------------------------

// 8. Compound Assignment
let num = 10; // Use +=, -=, *=, and /= on this variable.
let increment = (num += 2); //12
let decrement = (num -= 2); //10
let multiplication = (num *= 2); //20
let division = (num /= 2); //10
console.log(increment, decrement, multiplication, division);

// ---------------------------------------------------------------------------

// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.

let value: number = 144;
let isEven = value % 2 == 0; //using the modulus we get the remainder and for even remainder is zero
if (isEven) {
  console.log(`Number ${value} is even`);
} else console.log(`Number ${value} is odd`);

// ---------------------------------------------------------------------------

//10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.

let age: number = 11; // Check if age is 18 or older to determine voting eligibility.
let isEighteen = age >= 18;
if (isEighteen) {
  console.log(`${age} is above 18. You are eligible to vote!`);
} else console.log(`Sorry! ${age} is under age.`);

// ---------------------------------------------------------------------------

// 11. Grading System
// Instructions: Assign a grade based on a numerical score.

let score: number = 30;
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
  grade = "you are Fail!";
}
console.log(`Your score is ${score}. You get ${grade} grade.`);

// ---------------------------------------------------------------------------

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

// // Optimized solution
let largest = Math.max(x, y, z); //using inbuilt Js Math function to find the largest number
console.log(`${largest} is the largest number using Math.max function`);

// ---------------------------------------------------------------------------

// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.

let year: number = 2022;
// if year is completely divisible by 400 its leap year i.e 1200, 1600, 2000 are leap yrs
// Or if the year is divisble by 4 and is not divisble by 100 then its a leap year i.e 1700, 1800 are not leap years
let isLeapYear = year % 400 == 0 || (year % 4 === 0 && year % 100 != 0);

if (isLeapYear) {
  console.log(`${year} is a Leap year!`);
} else console.log(`${year} is not a leap year!`);

// ---------------------------------------------------------------------------

// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheit = 103; // Convert this to Celsius and print the result.

// formula to convert is cels = (farenheit - 32.0) * 5.0/9.0
let celcius = ((fahrenheit - 32) * 5) / 9;
// rounding off for clearity
console.log(Math.round(celcius), "=========celcius");

// ---------------------------------------------------------------------------

// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.

let number = -12; // Determine the sign of this number.
let sign;
if (number > 0) {
  sign = "positive";
} else if (number < 0) {
  sign = "negative";
} else sign = "zero";
console.log(`${number} is ${sign}`);

// ---------------------------------------------------------------------------

// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10.

let givenNumber = 2; // Print the multiplication table for this number up to 10.
for (let i = 1; i <= 10; i++) {
  console.log(`${givenNumber} x ${i} = ${givenNumber * i}`);
}
