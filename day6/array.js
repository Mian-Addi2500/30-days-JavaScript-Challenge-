// Task and Activites

//🔥💧🔥 Activity # 1  | Array Creation and Access🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 Create an array of numbers from 1 to 5 and log the array to the console  🚩💠💠

let number = [1, 2, 3, 4, 5];
//console.log(number);

//🍀🍀  output is : [[1, 2, 3, 4, 5]]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 Access the first and last elements of the array and log themto the console 🚩💠💠

let number1 = [4, 5, 6, 7, 8, 9];

let firstElement = number1[0];

let lastElement = number1[number1.length - 1];

//console.log( `the first element of my array ${number1} is: ${firstElement} and Last element is : ${lastElement}`);

//🍀🍀  output is : [the first element of my array 4,5,6,7,8,9 is: 4 and Last element is : 9]  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 2  | Array Methods(Basic) 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠Use the push method to add a new number to the end of the array and log the updated array  🚩💠💠

let array = [2, 5, 6, 8];
array.push(3);
//console.log(`After push method array is : ${array}`);

//🍀🍀  output is : [2, 5, 6, 8, 3]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠Use the [pop] method to remove the last element from the array and log the updated array   🚩💠💠

array.pop();

//console.log(`After pop method array is : ${array}`);

//🍀🍀  output is : [2, 5, 6, 8]  🍀🍀

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠 Use the [shift] method to remove the first element from the array and log the updated array  🚩💠💠

array.shift();

//console.log(`After shift method array is : ${array}`);

//🍀🍀  output is : []  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠 Use the [unshift] method to add a new number to the beginning of the array and log the updated array   🚩💠💠

array.unshift(4);

//console.log(`After unshift method array is : ${array}`);

//🍀🍀  output is : []  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 3  | Array  Methods (intermediate) 🔥💧🔥

// 🍁✍🍁 Task # 7  🍁✍🍁

//🚩💠💠 Use the [map] method to create a new array where each number is doubled and log the new array 🚩💠💠

let myArr = [2, 7, 6, 4, 1];

let mapedArray = myArr.map((n) => n * 2);

//console.log(mapedArray);

//🍀🍀  output is : [[ 4, 14, 12, 8, 2 ]]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 8  🍁✍🍁

//🚩💠💠 Use the [filter] method to create a new array with only even numbers and log the new array  🚩💠💠

let filteredArray = myArr.filter((n) => n % 2 === 0);

//console.log(`filtered array from my orignal array [${myArr}] is : [${filteredArray}]`);

//🍀🍀  output is : [filtered array from my orignal array [2,7,6,4,1] is : [2,6,4]]  🍀🍀

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 9  🍁✍🍁

//🚩💠💠 Use the [reduce] method to calculate the sum of all numbers in the  array and log the result🚩💠💠

let sum = myArr.reduce((acc, current) => acc + current, 0);

/* ✍📝✍ 

In this code:

- acc is the accumulator, which stores the running total.
- current is the current element being processed.
- acc + current adds the current element to the accumulator.
- The second argument 0 is the initial value of the accumulator.

The reduce() method applies this function to each element in the array, starting from the initial value, and returns the final accumulated value.


✍📝✍
*/

//console.log(`Reduced array from my orignal array [${myArr}] is : [${sum}]`);

//🍀🍀  output is : []  🍀🍀

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 4  | Array Iteration 🔥💧🔥

// 🍁✍🍁 Task # 10  🍁✍🍁

//🚩💠💠 use [for] loop to iterate over the array and log each element to the console 🚩💠💠

let myNumArray = [6, 9, 5, 2, 1];

for (let i = 0; i < myNumArray.length; i++) {
  const element = myNumArray[i];

  //console.log(element);
}

/*🍀🍀  output is : [

                        6
                        9
                        5
                        2
                        1

                        ]  
                        
🍀🍀
*/
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 11  🍁✍🍁

//🚩💠💠 use [forEach] loop to iterate over the array and log each element to the console 🚩💠💠

let arrayToIterate = [5, 6, 9, 8];
arrayToIterate.forEach((element) => {
  /* ✍📝✍ 
The forEach loop takes a callback function as an argument, which is called for each element in the array. The callback function takes the current element as an argument, which is logged to the console in this case.

✍📝✍
*/
  //console.log(element);
});

/*🍀🍀  output is : [

                        5
                        6
                        9
                        8



                        ]  
                        
🍀🍀
*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/

//🔥💧🔥 Activity # 5  | Multi-dimensional Arrays🔥💧🔥

// 🍁✍🍁 Task # 12  🍁✍🍁

//🚩💠💠 Create a two dimensional array (matrix) and log the entire array to the console  🚩💠💠

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
//🍀🍀  output is : [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 🍀🍀

/* ✍📝✍ 
In this example, matrix is a two-dimensional array with three rows and three columns. Each inner array represents a row in the matrix.

If you want to log the matrix in a more readable format, you can use a loop to iterate over the rows and columns:


✍📝✍
*/
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}

/*🍀🍀  output is : 

                    [ 1, 2, 3 ]
                    [ 4, 5, 6 ]
                    [ 7, 8, 9 ]

🍀🍀
*/

/* ✍📝✍ 
Alternatively, you can use the console.table() method to log the matrix in a tabular format:
✍📝✍
*/

console.table(matrix);

/*🍀🍀  output is : 

                ┌─────────┬───┬───┬───┐
                │ (index) │ 0 │ 1 │ 2 │
                ├─────────┼───┼───┼───┤
                │ 0       │ 1 │ 2 │ 3 │
                │ 1       │ 4 │ 5 │ 6 │
                │ 2       │ 7 │ 8 │ 9 │
                └─────────┴───┴───┴───┘

🍀🍀
*/
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 13  🍁✍🍁

//🚩💠💠 Access and log a specific element from the two-dimesional array 🚩💠💠

let myTwoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(myTwoDArray[1][2]);
//🍀🍀  output is : [6]  🍀🍀

/* 
✍📝✍

In this example, matrix[1][2] accesses the element at:

- Row index 1 (the second row, since indexing starts at 0)
- Column index 2 (the third column, since indexing starts at 0)

So, matrix[1][2] logs the value 6 to the console.

Here's a breakdown of the syntax:

- matrix[rowIndex][columnIndex]
- rowIndex is the index of the row you want to access (starts at 0)
- columnIndex is the index of the column you want to access (starts at 0)

✍📝✍

*/

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
*/
