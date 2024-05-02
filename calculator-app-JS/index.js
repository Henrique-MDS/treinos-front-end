

const display = document.getElementById("display")
const resetBtn = document.getElementById("resetBtn")

function appendToDisplay(input) {
    display.value += input;
}

resetBtn.addEventListener("click", ()=>{
    display.value = "";
})

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
    
}