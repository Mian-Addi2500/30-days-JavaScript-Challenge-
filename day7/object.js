// Task and Activites

//🔥💧🔥 Activity # 1  | Object Creation and Access🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 Create an object representing a book with properties like title, author, and year, and log the object to the console. 🚩💠💠

let book = {
  title: "Rich dad Poor Dad",
  author: "jons",
  year: 2021,
};

//console.log(book);

/*🍀🍀  output is : 

{ title: 'Rich dad Poor Dad', author: 'jons', year: 2021 }


  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 Access and log the title and author properties of the book object. 🚩💠💠

//console.log(book.title); // Rich dad Poor Dad
//console.log(book.author); //jons

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 2  | Object Methods 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠Add a method to the book object that returns a string with the book's title and author, and log the result of calling this 🚩💠💠

const bookObj = {
  title: "Rich dad Poor Dad",
  author: "jons",
  year: 2021,
  getBookInfo: function () {
    return `The title of book is : "${this.title}" which is published by "${this.author}"`;
  },
};

//console.log(bookObj.getBookInfo());

/*🍀🍀  output is : 


The title of book is : "Rich dad Poor Dad" which is published by "jons"

  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object 🚩💠💠

const book2 = {
  title: "Rich dad Poor Dad",
  author: "jons",
  year: 2021,

  updateyear: function (newYear) {
    this.year = newYear;
  },
};

//console.log(`Befor update in year :`, book2);

let updatedYear = book2.updateyear(1965);

//console.log(`After update in year :`, book2);

/*🍀🍀  output is : 

Befor update in year : {
  title: 'Rich dad Poor Dad',
  author: 'jons',
  year: 2021,
  updateyear: [Function: updateyear]
}
After update in year : {
  title: 'Rich dad Poor Dad',
  author: 'jons',
  year: 1965,
  updateyear: [Function: updateyear]
}


  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 3  | Nested Objects 🔥💧🔥

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 🚩💠💠

const library = {
  name: "public library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      getBookDetails: function () {
        return `${this.title} && (${this.year})`;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      getBookDetails: function () {
        return `${this.title} && (${this.year})`;
      },
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      getBookDetails: function () {
        return `${this.title} & (${this.year})`;
      },
    },
  ],
};
//console.log(library);
/*🍀🍀  output is : 

{
  name: 'public library',
  books: [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    }
  ]
}


  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 Access and log the name of the library and the titles of all the books in the library. 🚩💠💠

//console.log(`library name : `, library.name);
//console.log("Books Title",library.books.map((books) => books.title));

/*🍀🍀  output is : 

library name :  public library
Books Title [ 'To Kill a Mockingbird', '1984', 'The Great Gatsby' ]


  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 4  | the [this] keyword 🔥💧🔥

// 🍁✍🍁 Task # 7 🍁✍🍁

//🚩💠💠 Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.🚩💠💠

//console.log(library.books.map((books) => books.getBookDetails()));

/*🍀🍀  output is : 


[
  'To Kill a Mockingbird && (1960)',
  '1984 && (1949)',
  'The Great Gatsby & (1925)'
]

  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 5  | Object Itreation 🔥💧🔥

// 🍁✍🍁 Task # 8  🍁✍🍁

//🚩💠💠 Use a for...in loop to iterate over the properties of the book3 object and log each property and its value. 🚩💠💠
const book3 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getBookDetails: function () {
    return `${this.title} (${this.year})`;
  },
};

for (const property in book3) {
  if (typeof book3[property] === "function") {
    console.log(`${property}: ${book3[property]()}`);
  } else {
    console.log(`${property}: ${book3[property]}`);
  }
}
/*🍀🍀  output is : 


title: To Kill a Mockingbird
author: Harper Lee
year: 1960
getBookDetails: To Kill a Mockingbird (1960)

  🍀🍀*/

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 9  🍁✍🍁

//🚩💠💠 Use [Object.keys] and [Object.] values methods to log all the keys and values of the book3 object. 🚩💠💠
console.log("Keys:", Object.keys(book3));
console.log("Values:", Object.values(book3));

/*
                ✍📝✍ Imp NOTE  ✍📝✍

In this code:

- Object.keys(book) returns an array of all the property names (keys) in the book object.
- Object.values(book) returns an array of all the property values in the book object.

Note that the getBookDetails property is a function, so it's logged as [Function: getBookDetails] in the values array. If you want to log the result of calling the function instead, you can use Object.values(book).map(value => typeof value === 'function' ? value() : value) to map over the values and call any functions.

*/

/*🍀🍀  output is : 

Keys: [ 'title', 'author', 'year', 'getBookDetails' ]
Values: [
  'To Kill a Mockingbird',
  'Harper Lee',
  1960,
  [Function: getBookDetails]
]


  🍀🍀*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢

            🔻 Feature Request  🔻

1️⃣ 💨 Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

2️⃣ 💨 Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

3️⃣ 💨 Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object. keys /
Object. values .


              🔻 Achievement  🔻

💡 By the end of these activities, you will:💡

🔷Create and manipulate objects with properties and methods.

🔷Understand and use the [this ]keyword in object methods.

🔷Work with nested objects and arrays of objects.
 
🔷Iterate over an object's properties using loops and built-in methods.







*/
