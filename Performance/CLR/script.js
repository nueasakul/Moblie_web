// Fade in animation
const card = document.querySelector(".name-card");
const image = document.querySelector(".profile-image");

window.addEventListener("load", () => {
    card.style.opacity = "0";
    image.style.opacity = "0";

    setTimeout(()=>{
        image.style.transition = "opacity 1s ease";
        image.style.opacity = "1";
    },200);

    setTimeout(()=>{
        card.style.transition = "opacity 1s ease";
        card.style.opacity = "1";
    },600);
});
// 1. Logic สำหรับการ Scroll (Smart Navbar)
let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // ถ้าเลื่อนลง -> ซ่อน Navbar (ดึงขึ้นไป -80px)
        navbar.style.top = "-80px"; 
    } else {
        // ถ้าเลื่อนขึ้น -> แสดง Navbar (กลับมาที่ 0)
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// 2. Logic สำหรับ Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById("menu-container");
    // สลับคลาส 'show' ไปมา
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}