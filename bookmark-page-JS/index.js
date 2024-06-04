
//ACCORDION
const allAcc = document.querySelectorAll(".accgeral");

allAcc.forEach((accordion)=>{
    accordion.firstElementChild.addEventListener("click", ()=>{
        accordion.lastElementChild.classList.toggle("showAcc");
    })
})

//TABS
const btns = document.querySelectorAll(".btn-tabs");
const geralTab = document.querySelectorAll(".gtab");
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(e.target.innerText === "Simple Bookmarking") {
            tab1.classList.add("show-tabs");

            tab2.classList.add("tab-hides");
            tab2.classList.remove("show-tabs");

            tab3.classList.remove("show-tabs");
            tab3.classList.add("tab-hides");
        } else if(e.target.innerText === "Speedy Searching") {
            tab1.classList.remove("show-tabs");
            tab1.classList.add("tab-hides");

            tab2.classList.add("show-tabs");

            tab3.classList.remove("show-tabs");
            tab3.classList.add("tab-hides");
        } else if(e.target.innerText === "Easy Sharing") {
            tab1.classList.remove("show-tabs");
            tab1.classList.add("tab-hides");

            tab2.classList.add("tab-hides");
            tab2.classList.remove("show-tabs");

            tab3.classList.add("show-tabs");
        }
    })
})

//MENU
const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const menuMobile = document.getElementById("menuMobile");

hamburger.addEventListener("click", ()=>{
    menuMobile.classList.toggle("show-menu")
})

closebtn.addEventListener("click", ()=>{
    menuMobile.classList.toggle("show-menu")
})