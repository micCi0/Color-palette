// declaration
const palleteItems = document.querySelectorAll(".one-color");
const fill = document.querySelectorAll(".fill");
const codes = document.querySelectorAll(".code");
const button = document.querySelector("button");
let coppied = false;

// load function
function loadColors(){
    let color;
    fill.forEach((item , id) =>{
        // use forEach to fill an element
        color = randomColor();
        item.style.background = color; // background 
        codes[id].textContent = color.toUpperCase(); // hex code
    })
}
function randomColor(){
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16) // random hex color
    return `#${randomHex.padStart(6 , "0")}`;
}
palleteItems.forEach((item , id) =>{
    item.addEventListener("click" , () =>{
        if(coppied) return; 
        coppied = true;
        let code = codes[id].textContent // get code;
        navigator.clipboard.writeText(code) // copy code
        codes[id].textContent = "Copied";
        // use iterval to show and hide 
        setInterval(() =>{
            codes[id].textContent = code;
            coppied = false;
        } , 1000) // 1s
     })
})

loadColors();
button.addEventListener("click" ,loadColors)