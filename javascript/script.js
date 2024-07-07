// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p")
paragraph.textContent = "Hey I'm Red"
paragraph.setAttribute("style", "color: red")
container.appendChild(paragraph)

const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3!"
h3.setAttribute("style", "color:blue")
container.appendChild(h3)

const div = document.createElement("div")
div.setAttribute("style", "border: 1px solid black; background-color: pink")

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div!"

const p = document.createElement("p")
p.textContent = "Me too!"

div.appendChild(h1)
div.appendChild(p)
container.appendChild(div)

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");
  
  // METHOD 3
  btn.addEventListener("click", function (e) {
    console.log(e.target.style.background = "blue");
  });
  
  