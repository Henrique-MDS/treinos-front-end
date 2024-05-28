

const openMenuIcon = document.getElementById("icon-menu");
const closeMenuIcon = document.getElementById("icon-close");
const menuMobile = document.querySelector(".menu-mobile");
const classAnimation = document.querySelector(".openMenu");


openMenuIcon.addEventListener("click", (event)=>{
    event.preventDefault();

    if(menuMobile.classList.contains("openMenu") == false) {
        menuMobile.classList.add("openMenu");
    };

});

closeMenuIcon.addEventListener("click", (event)=>{
    event.preventDefault();

    if(menuMobile.classList.contains("openMenu")) {
        menuMobile.classList.remove("openMenu");
    };

});