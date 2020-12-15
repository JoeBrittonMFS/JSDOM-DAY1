const list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) { // Use a for loop to change the color of the text of each element in the list to orange
    list[i].style.color = "orange";
}

const newlist = document.getElementsByClassName("not-orange");

for (let i = 0; i < newlist.length; i++) {
    newlist[i].style.color = "red";
}