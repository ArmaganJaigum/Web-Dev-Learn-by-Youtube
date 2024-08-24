let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

btn1.addEventListener("click", () => {
    console.log("button was clicked - handeler1");
})
const heandeler2 =  () => {
    console.log("button was clicked- handeler2");
}
btn1.removeEventListener("click", heandeler2)

btn1.addEventListener("click", () => {
    console.log("button was clicked- handeler 3");
})

let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("You are inside div");
}