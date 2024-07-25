// Task and Activites

//🔥💧🔥 Activity # 1  | For Loop 🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 write a program to print numbers from 1 to 10 using a for loop🚩💠💠

for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

/*🍀🍀  output is :-
                    1
                    2
                    3
                    4
                    5
                    6
                    7
                    8
                    9
                    10 
  🍀🍀
*/
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 write a program to print the multiplication table of 5 using a for loop🚩💠💠

for (let i = 1; i <= 10; i++) {
  const element = i * 5;

  // console.log(`5 * ${i} = ${element}`);
}

/*🍀🍀  output is :-
                    5 * 1 = 5
                    5 * 2 = 10
                    5 * 3 = 15
                    5 * 4 = 20
                    5 * 5 = 25
                    5 * 6 = 30
                    5 * 7 = 35
                    5 * 8 = 40
                    5 * 9 = 45
                    5 * 10 = 50 
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity # 2  | while Loop 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 write a program to calculate the sum of numbers 1 to 10 using a while loop🚩💠💠

let i = 1;

while (i <= 10) {
  let sum = i + i;
  //console.log(`the sum of numbers [${i} + ${i}] is ${sum} `);
  i++;
}

/*🍀🍀  output is :-
                    the sum of numbers [1 + 1] is 2 
                    the sum of numbers [2 + 2] is 4 
                    the sum of numbers [3 + 3] is 6
                    the sum of numbers [4 + 4] is 8
                    the sum of numbers [5 + 5] is 10
                    the sum of numbers [6 + 6] is 12
                    the sum of numbers [7 + 7] is 14
                    the sum of numbers [8 + 8] is 16
                    the sum of numbers [9 + 9] is 18
                    the sum of numbers [10 + 10] is 20
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠 write a program to print numbers from 10 to 1  using a while loop🚩💠💠

let number = 10;

while (number >= 1) {
  //console.log(number);
  number--;
}

/*🍀🍀  output is :-
                        10
                        9
                        8
                        7
                        6
                        5
                        4
                        3
                        2
                        1
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity # 3  | Do....while Loop 🔥💧🔥

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠 write a program to print numbers from 1 to 5 using a do...while lopp🚩💠💠

let num = 1;

do {
  //console.log(num);
  num++;
} while (num <= 5);

/*🍀🍀  output is :-
                    1
                    2
                    3
                    4
                    5
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 write a program to calculate factorial of a number using a do...while lopp🚩💠💠
let fact = 1;
let numb = 5;
let y = 1;
do {
  fact = fact * y;
  //console.log(`the factorial of given numbe ${y} is ${fact}`);
  y++;
} while (y <= numb);

/*🍀🍀  output is :-
                        the factorial of given numbe 1 is 1
                        the factorial of given numbe 2 is 2
                        the factorial of given numbe 3 is 6
                        the factorial of given numbe 4 is 24
                        the factorial of given numbe 5 is 120
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity #4   | Nested Loop 🔥💧🔥

// 🍁✍🍁 Task #7   🍁✍🍁

//🚩💠💠 write a program to print a pattern using for lopp🚩💠💠

const n = 5; // Number of rows
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n"; // Newline after each row
}

//console.log(pattern);

/*🍀🍀  output is :-
                        *
                        **
                        ***
                        ****
                        *****
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🔥💧🔥 Activity #5   | Loop Control Statements 🔥💧🔥

// 🍁✍🍁 Task #8   🍁✍🍁

//🚩💠💠 write a program to print from 1 to 10 , but skip the number 5  using the [Continue] statement.🚩💠💠

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  // console.log(i);
}

/*🍀🍀  output is :-
                        1
                        2
                        3
                        4  // 5 is missing
                        6
                        7
                        8
                        9
                        10
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task #9   🍁✍🍁

//🚩💠💠 write a program to print from 1 to 10 , but stop the loop when the number is 7  using the [break] statement.🚩💠💠

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

/*🍀🍀  output is :-
                        1
                        2
                        3
                        4  
                        6
becuase we use break when 7 comes the loop break the results
  🍀🍀
*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢

            🔻 Feature Request  🔻



1️⃣ 💨 Number Printing Script :- Write a script that prints numbers from 1 to 10 using for and a while loop

2️⃣ 💨 Multiplication tabel Script :- Create a script that prints the multiplication tabel of 5 using a for looop

3️⃣ 💨 pattern printing Script :- Write a script that print pattern of starts using nested loops

4️⃣💨 Sum calculation Script :- Create a script that calculates the sum of numbers from 1 to 10 using a while loop

5️⃣💨 Factorial Calculation Script :- Create a script that calculates the factorial of a number using a do...while loop.


              🔻 Achievement  🔻

💡 By the end of these activities, you will:💡

🔷Undersatnd and use forloop to itreate over a sequence of numbers 

🔷Utilize while loops for iteration based on a condition

🔷Apply do...while loops to ensure the loop bodyis executed at least once

🔷Implement nested loops to solve more complex problems.

🔷use loop control statements (break and continue) to control the flow of loops.


*/
