// Task and Activites

//🔻 Activity # 1  | Variable Declarations 🔻

// ✍ Task # 1

//  Declare A variable using [Var] , assign it a number and log the value to the console.

var number = 2500;

console.log(number); // output is : 2500

// ✍ Task # 2

// Declare A variable using [let] , assign it a string and log the value to the console.

let my_Name = "Mian Addi";

console.log(my_Name); //output is : Mian Addi

//🔻 Activity # 2  | Constant Declarations 🔻

// ✍ Task # 3

// Declare A variable using [Const] , assign it a boolen value and log the value to the console.

const is_logIn = true;

console.log(is_logIn); //output is : true

//🔻 Activity # 3  | Data Types 🔻

// ✍ Task # 4

// create variables of diff data types (number , string , boolean , object , array) and log each variable's type using the [typeof]  operator

// number
let my_num = 12345;

// string
let my_str = "hello word";

// boolean
let is_possible = true;

// object
let my_obj = {
  name: "Mian addi",
  id: 1,
};

// array
let my_arr = [5, 6, 7, 8];

console.log(typeof my_num, typeof my_arr, typeof my_obj, typeof my_str); //output is : number, object, object, string

//🔻 Activity # 4  | Reassigning Variables 🔻

// ✍ Task # 5

// Declare a variable using [let] , assign it an initial value, reassign a new value, and lig both values to the console

let city = "mailsi";

console.log(city); //output is : mailsi

//reassign value city

city = "multan";

console.log(city); //now value updated form mailsi to multan and the output is : Multan

//🔻 Activity # 5  | Understanding Const 🔻

// ✍ Task # 6

// try reassigning a variable declared with [Const] and observe [ERROR]

const sports = "cricket"; //declareing a const value

console.log(sports); //output is : cricket

sports = "race"; // try to reassign const value

//📛 output 📛

//the error comes in this output which is : TypeError: Assignment to constant variable.

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢

            🔻 Feature Request  🔻



1️⃣ 💨Variable Types Console Log :- Write a script that declare variables of different data types and log both the value and type of each variable to the console

2️⃣ 💨 Reassignment Demo :- Create a script that demonstrates the difference in behavior b/w [let] and [const] when it comes to reassignment



              🔻 Achievement  🔻

💡 By the end of these activities, you will:💡

🔷know how t declare variable using [var , let, and const]

🔷Understand diff data types in JS 

🔷Be able to use the [typeof] operator to identify the data typpe of a variable

🔷Understand the concept of variable reassignment and the immutability of [const] variables





*/
