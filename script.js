

const pallete = document.querySelector(".pallete")
const items = document.querySelectorAll(".one-item");
const code =  document.querySelectorAll(".code");
const bg =  document.querySelectorAll(".bg");

let r = 42

function colorPallete(){
  for (let i = 0; i < r; i++) {
    let color = randomColor();
    const oneItem = document.createElement("div");
    oneItem.className = "one-item";
    pallete.appendChild(oneItem);
  
    const oneColor = document.createElement("div");
    oneColor.className = "one-color";
    oneItem.appendChild(oneColor);
  
    const bg = document.createElement("div");
    bg.className = "bg"; 
    bg.style.background = color;
    oneColor.appendChild(bg);
  
    const code = document.createElement("p");
    code.className = "code"; 
    code.textContent = color;
    oneColor.appendChild(code);
    code.addEventListener("click" , () => copyCode(code))
  }
}

function copyCode(code){
  let color = code.textContent;
  code.textContent = "Text was copied";
  navigator.clipboard.writeText(color);
  setInterval(() =>{
    code.textContent = color;
  } , 1000)
  code.textContent = "Text was copied";
}

function randomColor(){
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex.padStart( 6, "0")}`;
}

onload = colorPallete();
