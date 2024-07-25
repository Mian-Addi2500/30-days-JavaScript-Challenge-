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

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2 🍁✍🍁

//🚩💠💠 write a program to check if a person is eligible to vote (age >= 18) and log the result to the console 🚩💠💠

let p_age = 24;

if (p_age >= 18) {
  console.log(`yes you are eligible for vote `);
} else {
  console.log(`sorry you are under age`);
}

//🍀🍀  output is : yes you are eligible for vote   🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

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

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity # 3  | Switch case 🔥💧🔥

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠 write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day number to the console 🚩💠💠

let myWeakNum = 5;

switch (myWeakNum) {
  case 1:
    console.log(`at number 1 the weak day comes is [Monday]`);
    break;
  case 2:
    console.log(`at number 2 the weak day comes is [Tuesday]`);
    break;
  case 3:
    console.log(`at number 3 the weak day comes is [Wednesday]`);
    break;
  case 4:
    console.log(`at number 4 the weak day comes is [Thersday]`);
    break;
  case 5:
    console.log(`at number 5 the weak day comes is [Friday]`);
    break;
  case 6:
    console.log(`at number 6 the weak day comes is [Saturday]`);
    break;
  case 7:
    console.log(`at number 7 the weak day comes is [Sunday]`);
    break;

  default:
    console.log(`Input a valid number from 1-7`);
    break;
}

//🍀🍀  output is :  at number 5 the weak day comes is [Friday]🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 5 🍁✍🍁

//🚩💠💠 write a program that uses a switch case to assign a grade ('A, 'B', 'C', 'D', 'F') based on a score and log the grade to the console🚩💠💠
let score = 82;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";

    break;
  case score >= 80 && score <= 90:
    grade = "B";

    break;
  case score >= 70:
    grade = "C";

    break;
  case score >= 60:
    grade = "D";

    break;

  default:
    grade = "F";
    break;
}

console.log(
  `According to taken Score ${score} by Student he win his grade ${grade} `
);

//🍀🍀  output is :  According to taken Score 82 by Student he win his grade B   🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity # 4  | Conditional (ternary) Operator 🔥💧🔥

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 write a program that uses the ternary operator to check if a number is even or odd and log the result to the console 🚩💠💠

let number = 45;

let numberType =
  number % 2 == 0
    ? `The given number ${number} is even number `
    : `The given number ${number} is odd number`;

console.log(numberType);

//🍀🍀  output is : The given number 45 is odd number  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity # 5  | Combining Conditions 🔥💧🔥

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console🚩💠💠

let year = 2024;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`congrate your given year ${year} is leap year`);
} else {
  console.log(`congrate your given year ${year} is not leap year`);
}

//🍀🍀  output is : congrate your given year 2024 is leap year 🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢

            🔻 Feature Request  🔻



1️⃣ 💨 Number Check Script :- Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

2️⃣ 💨 Voting Eligibility Script :- Create a script to check if a person is eligible to vote based on their age and log the result

3️⃣ 💨 Day of the week Script :- Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

4️⃣💨 Grade Assignment Script :- Create a script that uses a switch case to assign a grade based on a score and logs the grade

5️⃣💨 Leap Year Check Script :- Write a script that checks if a year is a leap year using multiple conditions and logs the result.


              🔻 Achievement  🔻

💡 By the end of these activities, you will:💡

🔷Implement and understand basic if-else control flow

🔷Use nested if-else statements to handle multiple conditions.

🔷Utilize switch cases for control flow based on specific values

🔷Apply the ternary operator for concise condition checking

🔷 Combine multiple conditions to solve more complex problems 


*/
