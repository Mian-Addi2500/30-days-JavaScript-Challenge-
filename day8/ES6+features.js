// Task and Activites

//🔥💧🔥 Activity # 1  | Template Literals 🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.  🚩💠💠

let name = "Adil mian";

let age = 24;

//console.log(`My name is ${name} and I'm ${age} years old`);

/*🍀🍀  output is : 

My name is Adil mian and I'm 24 years old


  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 Create a multi-line string using template literals and log it to the console. 🚩💠💠

let myDetail = `Hy my name is adil mian.
I'm 24 year old.
I live in pakistan`;

//console.log(myDetail);

/*🍀🍀  output is : 

Hy my name is adil mian.
I'm 24 year old.
I live in pakistan


  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 2  | Destructing 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 🚩💠💠

let numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
//console.log("First is :", first); //First is : 1
//console.log("second is :", second); // second is : 2

/*

In this code:

- We define an array numbers containing five elements.
- We use array destructuring to extract the first and second elements into variables first and second, respectively.
- We log the values of first and second to the console.

Note that array destructuring allows us to extract elements from an array in a concise and readable way. If the array has fewer elements than the variables we're trying to extract, the remaining variables will be undefined. For example:

*/

let count = [1, 2];
const [first1, second1, third] = count;

//console.log("First:", first1); // First: 1
//console.log("Second:", second1); //  Second: 2
//console.log("Third:", third); //  Third: undefined

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠 Use object destructuring to extract the title and author from a book object and log them to the console. 🚩💠💠

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const { title, author } = book;

//console.log(`Title :  ${title}`); //Title :  To Kill a Mockingbird
//console.log(`Author : ${author}`); //Author : Harper Lee

/* 

In this code:

- We define a book object with title, author, and year properties.
- We use object destructuring to extract the title and author properties into variables title and author, respectively.
- We log the values of title and author to the console using template literals.

Note that object destructuring allows us to extract properties from an object in a concise and readable way. If the object has additional properties that we don't want to extract, we can simply ignore them.


  */

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity #   | Spread and Rest operators 🔥💧🔥

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console 🚩💠💠

const existingArray = [2, 3, 4, 5];
const additionalArray = [4, 3, 7, 8];

const newArray = [...existingArray, ...additionalArray];

//console.log(newArray);

/*

In this code:

- We define an existingArray with elements 2, 3, 4, and 5.
- We define an additionalElements array with elements 4, 3, 7, and 8.
- We use the spread operator (...) to create a new array newArray that includes all elements of existingArray and additionalElements.
- We log the newArray to the console.

The spread operator allows us to concatenate arrays and objects in a concise and readable way. Note that we can also use the spread operator to add individual elements to the new array, like this:


const newArray = [...existingArray, 4, 5, 6];


*/
/*🍀🍀  output is : 

[2, 3, 4, 5, 4, 3, 7, 8]

  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 Use the rest operator in a function to accept an arbitrary number(marzi ky numbers jitny mrzi aye add kro) of arguments, sum them, and return the result. 🚩💠💠
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//console.log("The sum is : ", sum(1, 3, 4, 5)); //The sum is :  13
//console.log("The sum is : ", sum(3, 4, 5, 9)); //The sum is :  21

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 4  | Default Parameters 🔥💧🔥

// 🍁✍🍁 Task # 7  🍁✍🍁

//🚩💠💠  Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter. 🚩💠💠

function defaultNumberProduct(a, b = 2) {
  return a * b;
}
//console.log(`The product of 2 numbers is : ${defaultNumberProduct(5)}`); //10 beacuse by default b is 2

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 5  | Enhanced Object Literals 🔥💧🔥

// 🍁✍🍁 Task # 8  🍁✍🍁

//🚩💠💠 Use enhanced object literals to create an object with methods and properties, and log the object to the console.  🚩💠💠
const myBook = {
  title: "Rich dad poor Dad",
  author: "jons",
  year: 1996,
  getmybookDetail() {
    return `The title of book1 is : ${this.title} and the author of this book1 is ${this.author}`;
  },

  publishYear() {
    return `the book publish year is : ${this.year}`;
  },
};

//console.log(myBook);
//console.log(myBook.getmybookDetail());
//console.log(myBook.publishYear());

/*

In this code:

- We define an object book using enhanced object literals.
- We add properties title, author, and year to the object.
- We add methods getBookDetails and getAuthor to the object using the concise method syntax.
- We log the entire book object to the console.
- We log the result of calling the getBookDetails method.
- We log the result of calling the getAuthor method.

Enhanced object literals provide a concise way to create objects with methods and properties, making our code more readable and efficient.


*/

/*🍀🍀  output is : 

1)

{
  title: 'Rich dad poor Dad',
  author: 'jons',
  year: 1996,
  book1Detail: [Function: book1Detail],
  publishYear: [Function: publishYear]
}

2)

The title of book1 is : Rich dad poor Dad and the author of this book1 is jons
3)
the book publish year is : 1996
  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 9  🍁✍🍁

//🚩💠💠 Create an object with computed property names based on variables and log the object to the console. 🚩💠💠
const prefix = "user";
const suffix = "info";
const user = {
  [`${prefix}Name`]: "jons",
  [`${prefix}Age`]: 30,
  [`${suffix}Email`]: "jons@email.com",
};
//console.log(user);

/* 


In this code:

- We define variables prefix and suffix that we'll use to compute the property names.
- We create an object user using computed property names.
- We use template literals to compute the property names by concatenating the prefix and suffix variables with other strings.
- We log the user object to the console.

Computed property names allow us to dynamically generate property names based on variables, making our code more flexible and dynamic.

*/

/*🍀🍀  output is : 

{ userName: 'jons', userAge: 30, infoEmail: 'jons@email.com' }


  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢



            🔻 Feature Request  🔻


1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded
variables and multi-line strings.
2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest
operator to handle multiple function arguments.
4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with
different arguments.
5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and
computed property names.



              🔻 Achievement  🔻

           💡 By the end of these activities, you will:💡   

• Understand and use template literals for string interpolation and multi-line strings.
• Apply destructuring to extract values from arrays and objects.
• Utilize spread and rest operators for array manipulation and function arguments.
• Define functions with default parameters.
• Create objects using enhanced object literals, including methods and computed property names.



            */
