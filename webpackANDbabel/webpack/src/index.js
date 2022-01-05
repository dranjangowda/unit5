import add from "./calc.js"
import("./index.css")
console.log(add(3,5))

const h1 = document.createElement("h1")
h1.innerText = "hello webpack";
h1.classList.add("redcolor")

document.getElementById("root").append(h1)