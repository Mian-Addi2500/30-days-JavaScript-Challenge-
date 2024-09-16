//Event Handling

// Task and Activites

//🔥💧🔥 Activity # 1  | Basic Event Handling 🔥💧🔥

// 🍁✍🍁 Task # 1  🍁✍🍁

//🚩💠💠 Add a click event listener to a button that changes the text context of a paragrapgh 🚩💠💠

//select button and paragraph element

const myBtn = document.querySelector(".myBtn");
const myParagraph = document.querySelector(".textElement");

myBtn.addEventListener("click", () => {
  //change text of paragraph

  myParagraph.textContent = "button clicked";
});
myBtn.addEventListener("dblclick", () => {
  myParagraph.textContent = "button is double clicked";
});
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 2  🍁✍🍁

//🚩💠💠 Add a double-click event listener to an image that toggles its visibility 🚩💠💠

//select img element

const myImg = document.querySelector("#myImg");

myImg.addEventListener("dblclick", () => {
  myImg.style.visibility =
    myImg.style.visibility === "hidden" ? "visible" : "hidden";
});
/*
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

*/

//🔥💧🔥 Activity # 2  | Mouse Events 🔥💧🔥

// 🍁✍🍁 Task # 3  🍁✍🍁

//🚩💠💠 Add a mouseover event listener to an element that changes its background color 🚩💠💠

const myDiv = document.querySelector("#divElement");

//add mouse over event

myDiv.addEventListener("mouseover", () => {
  myDiv.style.backgroundColor = "gray";
});

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 4  🍁✍🍁

//🚩💠💠 Add a mouseout event listener to an element that resets its background color 🚩💠💠

myDiv.addEventListener("mouseout", () => {
  myDiv.style.backgroundColor = "rgb(113, 100, 24)";
});
/*
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

*/

//🔥💧🔥 Activity # 3  | Keyboard Event 🔥💧🔥

// 🍁✍🍁 Task # 5  🍁✍🍁

//🚩💠💠 Add a keydown event listener to an input field that logs the key pressed to the console 🚩💠💠
const myInput = document.querySelector("#myInput");
myInput.addEventListener("keydown", (event) => {
  console.log(`key pressed :  ${event.key}`);
});
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 6  🍁✍🍁

//🚩💠💠Add a keyup event listener to an input field that display the current value in a paragrapgh 🚩💠💠
const myParagraphToDisplay = document.querySelector(".displayValue");
myInput.addEventListener("keyup", () => {
  myParagraphToDisplay.textContent = myInput.value;
});
/*
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

*/ //🔥💧🔥 Activity # 4  | form events 🔥💧🔥

// 🍁✍🍁 Task # 7  🍁✍🍁

//🚩💠💠 Add a submit event to a form that prevents the default submission and logs the form data to the console 🚩💠💠

//get form element

const myform = document.getElementById("myForm");

// Add a submit event listener to prevent default submission and log form data
myform.addEventListener("submit", (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(myform);

  // Log the form data to the console using for-of loop

  for (const [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
});

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢


In this code:

- We select the form using document.getElementById().
- We add a submit event listener to the form using addEventListener().
- When the form is submitted, the event listener calls the callback function, which prevents the default form submission using event.preventDefault().
- We create a new FormData object from the form using new FormData(form).
- We log the form data to the console using a for...of loop to iterate over the FormData object.

Note: The FormData object contains the form data in a key-value format, where the keys are the names of the form fields and the values are the user-inputted values.

*/
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 8  🍁✍🍁

//🚩💠💠 Add a change event listener to a select dropdown that displays the selected value in a paragrapgh 🚩💠💠

//select paragraph and select dropdown

const myDropdown = document.querySelector("#mySelect");
const myPgh = document.querySelector("#displayValue");

// Add a change event listener to display the selected value

myDropdown.addEventListener("change", () => {
  myPgh.textContent = `You Selected ${myDropdown.value}`;
});
/*
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

*/

//🔥💧🔥 Activity # 5  |  Events Delegation 🔥💧🔥

// 🍁✍🍁 Task # 9  🍁✍🍁

//🚩💠💠 Add a click event listener to a list that logs the text content of the clicked list item using event delegation🚩💠💠
const list = document.getElementById("myList");

// Add a click event listener to the list using event delegation
list.addEventListener("click", (event) => {
  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {
    // Log the text content of the clicked list item
    console.log(event.target.textContent);
  }
});

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢

In this code:

- We select the list using document.getElementById().
- We add a click event listener to the list using addEventListener().
- When a click event occurs, the event listener checks if the clicked element is a list item (LI) using event.target.tagName.
- If the clicked element is a list item, the event listener logs the text content of the clicked list item using event.target.textContent.

This approach uses event delegation, where the event listener is added to the parent element (the list) and checks the target element of the event to determine if it's a list item. This way, we don't need to add event listeners to each individual list item.



*/
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// 🍁✍🍁 Task # 10 🍁✍🍁

//🚩💠💠 Add an event listener to a parent element that listens for events from dynamically added child elements 🚩💠💠

// Select the parent element
const parent = document.getElementById("parent");

// Add an event listener to the parent element
parent.addEventListener("click", (event) => {
  // Check if the target element is a child element
  if (event.target !== parent) {
    // Handle the event for the dynamically added child element
    console.log(
      `Clicked on ${event.target.tagName} with text: ${event.target.textContent}`
    );
  }
});

// Dynamically add child elements
const child1 = document.createElement("button");
child1.textContent = "Click me 1!";
parent.appendChild(child1);

const child2 = document.createElement("button");
child2.textContent = "Click me 2!";
parent.appendChild(child2);

/*💢💢💢💢💢💢💢 Notes 💢💢💢💢💢💢💢
This program creates a parent element with an ID of "parent" and dynamically adds two child button elements to it. The JavaScript code uses event delegation to listen for click events on the parent element and handles the events for the dynamically added child elements.

*/

/*
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
   ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ 🔶🔶 ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

*/
