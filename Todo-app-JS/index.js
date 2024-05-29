
const myInput = document.getElementById("myInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const myList = document.getElementById("myList");
const clearCompleted = document.getElementById("clearCompleted");
const showCompleted = document.getElementById("completed");
let myCount = 0;

addTaskBtn.addEventListener("click", ()=>{
    myInputValue = myInput.value;

    if(myInputValue == "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = myInputValue;
        myList.appendChild(li);
        myCount++;
        document.getElementById("counter").innerHTML = myCount;

        let mySpan = document.createElement("span");
        mySpan.style.background = "images/icon-cross.svg";
        li.appendChild(mySpan);
    }
    myInput.value = "";
})

myList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        clearCompleted.addEventListener("click",()=>{
            if(e.target.classList.contains("checked")){
                myList.removeChild(e.target);
                myCount--;
            }
            document.getElementById("counter").innerHTML = myCount;
        })
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        myCount--;
        document.getElementById("counter").innerHTML = myCount;
    }
})

const darkThemeIcon = document.getElementById("darkThemeIcon");
const divList = document.getElementById("divList");

darkThemeIcon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");

})

