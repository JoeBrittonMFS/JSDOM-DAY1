//cycle over the list items and apply colors from the array called colours
// const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
// const listItems = document.querySelectorAll("li");

// for (let i = 0; i < colours.length; i++) {
//     listItems[i].style.color = colours[i];
// }



// Made up by me. Changes colour to random colour.
const myArray = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const Items = document.querySelectorAll("li");

for (let j = 0; j < myArray.length; j++) {
    Items[j].style.color = myArray[Math.floor(Math.random() * (5 - 0) ) + 0]
}