// Task and Activites

//🔥💧🔥 Activity # 1  | Function Declaration 🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 write function to check if a number is even or odd and log the result to the console 🚩💠💠

function checknumber(number) {
  if (number % 2 === 0) {
    console.log(`Your given number ${number} is [even] number`);
  } else {
    console.log(`Your given number ${number} is [odd] number`);
  }
}
//checknumber(11);

//🍀🍀  output is : [Your given number 11 is [odd] number]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 write function to calculate the sequare of a number and return the result🚩💠💠

function calculateSquare(num) {
  return num * num;
}
let myNumber = 5;
let result = calculateSquare(myNumber);

//console.log(`the square of your given number ${myNumber}  is : ${result}`);

//🍀🍀  output is : [the square of your given number 5  is : 25]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 2  | Function Expression 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 write function expression to find the maximum of two numbers and log the result to the console 🚩💠💠

const maxNumber = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

let a = 255;
let b = 2397;

let maxnumberResult = maxNumber(a, b);

// console.log(`the maximum number from your given two numbers ${a} and ${b} is: ${maxnumberResult}`);

//🍀🍀  output is : [the maximum number from your given two numbers 255 and 2397 is: 2397]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠 write function expression to concatenate two strings and return the result 🚩💠💠

const concatStrings = function (str1, str2) {
  return str1 + str2;
};
let myStr1 = "helo";
let myStr2 = " adil";
const concatstringResult = concatStrings(myStr1, myStr2);

//console.log(concatstringResult);

//🍀🍀  output is : [helo adil]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 3  | Arrow Function  🔥💧🔥

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠 write an arrow functionto calculate the sum of two numbers and return the result🚩💠💠

const addNumbers = (a, b) => {
  return a + b;
};
let myNum1 = 5;
let myNum2 = 8;

const sum = addNumbers(myNum1, myNum2);

//console.log(`The sum of ${myNum1} and ${myNum2} is : ${sum}`);

//🍀🍀  output is : [The sum of 5 and 8 is : 13]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 write an arrow function to check if a string contains a specific characters and return a boolean value 🚩💠💠

const charToFind = (myStr, myChar) => {
  return myStr.includes(myChar);
};

let stringIs = "hwllo word";

let char = "d";

const stringMatchingResult = charToFind(stringIs, char);

//console.log(`Is my string "${stringIs}" includes this charcater "${char}" : ${stringMatchingResult}`);

//🍀🍀  output is : [Is my string "hwllo word" includes this charcater "d" : true]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 4  | Function Parameters and Default Values 🔥💧🔥

// 🍁✍🍁 Task # 7  🍁✍🍁

//🚩💠💠 Write a function that takes two parameters and returns their product. Provide a default value for second parameter 🚩💠💠
let productFunction = (a, b = 2) => {
  return a * b;
};
let c = 5;
let d = 8;

let product = productFunction(c, d);
//console.log(`the product of "${c}" & "${d}" is : ${product}`);
product = productFunction(c);
//console.log(`the product of number is : ${product}`);

//🍀🍀  output is : [the product of "5" & "8" is : 40] || [the product of number is : 10 (beacuse c=5 and 2nd value comes from by default value which comes from function parameter value which is 2 therefor the product of 5*2 = 10)] 🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 8  🍁✍🍁

//🚩💠💠 Write a function taht takes a person's name and age and return a greeting message . provide a default value for the age  🚩💠💠

let greetingFunction = (name, age = 25) => {
  return `Hello ${name}! You are ${age} years old.`;
};
let personName = "Adil";
let personAge = 24;

let greetingMessage = greetingFunction(personName, personAge);
//console.log(greetingMessage);
greetingMessage = greetingFunction(personName);
//console.log(greetingMessage);

//🍀🍀  output is : [Hello Adil! You are 24 years old.] || [Hello Adil! You are 25 years old.] 🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 5  | Higher-Order Functions 🔥💧🔥

/*
📌📖📚📝📌 

In JavaScript, a higher-order function (HOF) is a function that takes another function as an argument, or returns a function as its result. In other words, a HOF is a function that operates on other functions.

A higher-order function is a function that can do at least one of the following:

1. Takes a function as an argument: A HOF can accept another function as a parameter, allowing it to call or manipulate that function.
2. Returns a function: A HOF can return a new function, which can be used elsewhere in the code.
3. Can manipulate function behavior: HOFs can modify or extend the behavior of the functions they take as arguments.


📌📖📚📝📌

*/

// 🍁✍🍁 Task # 9  🍁✍🍁

//🚩💠💠Write a higher-order function taht takes a function and a number , and calls the function that many times   🚩💠💠
const highorderFunction = (fn, number) => {
  for (let i = 0; i <= number; i++) {
    fn();
  }
};
const sayHello = () => {
  console.log("Hello Mian sb!");
};
//console.log(highorderFunction(sayHello, 5));

//🍀🍀  output is : [ "Hello Mian sb!" printed 5 times]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 10  🍁✍🍁

//🚩💠💠 Write a higher-order function that takes two functions and a value , applies the first function to the value , and the applies the second function to the result 🚩💠💠

function compose(fn1, fn2, value) {
  return fn2(fn1(value));
}

/* ✍📝✍ 

This function, compose, takes three arguments:

- func1: the first function to apply
- func2: the second function to apply
- value: the initial value to pass to func1

It returns the result of applying func2 to the result of applying func1 to value.

✍📝✍
*/

function multiply(x) {
  return x * x;
}

function addThree(x) {
  return x + 3;
}
const composeResult = compose(multiply, addThree, 5);

console.log(`Result : ${composeResult}`);
//🍀🍀  output is : [Result : 28  {Should be 28 (3 + 5 * 5)} ]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/
