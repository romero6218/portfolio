const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick=()=> {
        if(item.id=="clear"){
            display.innerText = "";
        }else if(item.id=="backspace"){
            display.innerText = display.innerText.slice(0,-1);
        }else if(display.innerText !="" && item.id=="equal"){
            display.innerText = Math.round(eval(display.innerText)*1000)/1000;
        }else if(display.innerText == "" && item.id=="equal"){
            display.innerText = "NULL";
            setTimeout(() => (display.innerText = ""), 2000);
        }else{
            display.innerText += item.id;
        }
    }      
})  

const themeTogglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeTogglerBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeTogglerBtn.classList.toggle("active");
    isDark = !isDark;
}
