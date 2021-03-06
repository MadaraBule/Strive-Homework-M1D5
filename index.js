/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let l1 = 5;
let l2 = 6;

const calculateArea = function (a, b) {
  return a * b;
};
console.log(calculateArea(l1, l2));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a, b) {
  let result;
  if (a === b) {
    result = (a + b) * 3;
  } else {
    result = a + b;
  }
  return result;
}
console.log(crazySum(l1, l2));
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
let numberUno = 6;

const crazyDiff = function (a) {
  if (a > 19) {
    return Math.abs(a - 19) * 3;
  } else {
    return Math.abs(a - 19);
  }
};
console.log(crazyDiff(numberUno));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(44));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str) {
  if (str.startsWith("Strive") /* true / false */) {
    return str;
  } else {
    return "Strive " + str;
  }
};

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (a) {
  if (a % 3 === 0 || a % 7 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(check3and7(5));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
let howToDoIt = "How do you reverse a string in-place in JavaScript?";

const reverseString = function (a) {
  for (var i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
  }
  return a;
};
console.log(reverseString(howToDoIt));

// const reverseString = function (str) {
//   return str.split("").reverse("").join("");

//   //let splitString = str.split("")
//   //let reverseString = splitString.reverse()
//   //let finalString = reverseString.join("")
// };
// console.log(reverseString("Strive"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
let textForUse = "Write a function of each word of a given string parameter.";
const upperFirst = function (a) {
  let painpeko = [];
  painpeko = a.split(" ");
  for (let i = 0; i < painpeko.length; i++) {
    painpeko[i] = painpeko[i][0].toUpperCase() + painpeko[i].substr(1);
  }
  return painpeko.join(" ");
};
console.log(upperFirst(textForUse));
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
let anotherTextItem = "function called which creates and";
const cutString = function (a) {
  return a.substring(1, a.length - 1);
};
console.log(cutString(anotherTextItem));
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (a) {
  let randomNumbers = [];
  for (let i = 0; i < a; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10) + 10);
  }
  return randomNumbers;
};
console.log(giveMeRandom(3));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
