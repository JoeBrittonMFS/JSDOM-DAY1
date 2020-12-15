const myHeading = document.getElementById("heading");

myHeading.addEventListener("mousein", () => {
    myHeading.style.color = "red";
});

myHeading.addEventListener("mouseout", () => {
    myHeading.style.color = "black";
})