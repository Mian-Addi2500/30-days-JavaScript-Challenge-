// Task and Activites

//🔥💧🔥 Activity # 1  | if-else Statements 🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 write a program to check if a number is positive , negitive, or zero, and log the result to the console 🚩💠💠

let x = 2;

let y = 0;

let z = -5;

if (y > 0) {
  console.log(`${y} : is positive number`);
} else if (y < 0) {
  console.log(`${y} : is negative number`);
} else {
  console.log(`${y} : is zero number`);
}

//🍀🍀  output is : 0 : is zero number  🍀🍀

if (z > 0) {
  console.log(`${z} : is positive number`);
} else if (z < 0) {
  console.log(`${z} : is negative number`);
} else {
  console.log(`${z} : is zero number`);
}

//🍀🍀  output is : -5 : is negative number  🍀🍀

if (x > 0) {
  console.log(`${x} : is positive number`);
} else if (x < 0) {
  console.log(`${x} : is negative number`);
} else {
  console.log(`${x} : is zero number`);
}

//🍀🍀  output is : 2 : is positive number  🍀🍀

// 🍁✍🍁 Task # 2 🍁✍🍁

//🚩💠💠 write a program to check if a person is eligible to vote (age >= 18) and log the result to the console 🚩💠💠

let p_age = 24;

if (p_age >= 18) {
  console.log(`yes you are eligible for vote `);
} else {
  console.log(`sorry you are under age`);
}

//🍀🍀  output is : yes you are eligible for vote   🍀🍀

//🔥💧🔥 Activity # 2  | Nested if-else Statements 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 write a program to find largest of three numbers using nested if-else statements🚩💠💠

let a = 954;

let b = 550;

let c = 605;

if (a > b && a > c) {
  console.log(`the number [ a = ${a} ] is greater then from all numbers`);
} else if (b > a && b > c) {
  console.log(`the number ${b} is greater then all from numbers`);
} else if (c > a && c > b) {
  console.log(`the number ${c} is greater then all from numbers`);
}

//🍀🍀  output is :  the number [ a = 954 ] is greater then from all numbers 🍀🍀
