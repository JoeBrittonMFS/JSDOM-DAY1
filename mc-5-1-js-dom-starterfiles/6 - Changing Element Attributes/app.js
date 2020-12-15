const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    image.src = input.value;
})

// on a button click, the image.src will be equal to whatever you put inside the input field.
// So if you put a image src inside the input field the image will change.