let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// Question 2
let para = document.querySelector("p");
para.classList.add("newClass");