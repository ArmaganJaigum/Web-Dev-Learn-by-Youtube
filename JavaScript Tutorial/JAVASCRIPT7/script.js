// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let div = document.querySelector("div");

// div.style.backgroundColor = "Green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "20px";
// div.innerText = "Hello";

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am New!</i>";

document.querySelector("body").prepend(newHeading);