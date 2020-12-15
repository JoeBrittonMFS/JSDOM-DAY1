// document.querySelectorAll("li"); // return all li's
// document.querySelector("li"); // returns the first li

const listItems = document.querySelectorAll("li:nth-child(even)"); // This is a CSS Selector. :nth-child() 

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "red";
}


