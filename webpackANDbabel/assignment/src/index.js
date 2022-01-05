import ("./index.css")
// import image from "/Lays-Logo.png"
const p = document.createElement("p")
p.classList.add("para")

function takenote(){
    const note = document.getElementById("note").value
    p.innerText ="--" + note
    document.getElementById("container").append(p)
}
