

const iconOpenMenu = document.getElementById("menu-icon");
const iconCloseMenu = document.getElementById("menu-icon-close");
const menuMobile = document.querySelector(".mobile-menu");

iconOpenMenu.addEventListener("click", (event)=>{
    event.preventDefault();
    if(menuMobile.classList.contains("hide")) {
        menuMobile.classList.remove("hide");
    };
});

iconCloseMenu.addEventListener("click", (event)=>{
    event.preventDefault();
    if(menuMobile.classList.contains("hide") == false) {
        menuMobile.classList.add("hide");
    };
});