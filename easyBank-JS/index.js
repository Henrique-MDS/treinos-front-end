
const iconOpen = document.getElementById("hamburguer");
const iconClose = document.getElementById("iconClose");
const mobileMenu = document.querySelector(".mobile-menu");

iconOpen.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
})

iconClose.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
})