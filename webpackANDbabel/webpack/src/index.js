import add from "./calc.js"
import("./index.css")
import React from "react"
import ReactDom from "react-dom"

// const h1 = document.createElement("h1")
// h1.innerText = "hello webpack";
// h1.classList.add("redcolor")

// document.getElementById("root").append(h1)

ReactDom.render(
//     React.createElement("h1",{className:"redcolor"},
//     [
//         "Hello webpack and ",
//         React.createElement("i",null,"react")
//     ]
//   ),
<h1 className="redcolor">Hello webpack and {" "}<i className="test">React <b>Bold</b></i></h1>,
   document.getElementById("root")
)