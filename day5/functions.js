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

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 write function expression to concatenate two strings and return the result 🚩💠💠

const concatStrings = function (str1, str2) {
  return str1 + str2;
};
let myStr1 = "helo";
let myStr2 = " adil";
const concatstringResult = concatStrings(myStr1, myStr2);

console.log(concatstringResult);

//🍀🍀  output is : [helo adil]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/
