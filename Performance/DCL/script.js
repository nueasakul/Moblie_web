/* =========================================
   1. FADE-IN CARD ANIMATION (On Load)
========================================= */
window.addEventListener("load", function () {

    const card = document.querySelector(".card");

    // เช็คก่อนว่ามี .card จริงไหม (กัน error)
    if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200);
    }

});


/* =========================================
   2. SMART NAVBAR (Hide on Scroll Down)
========================================= */
let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");

window.addEventListener("scroll", function () {

    if (!navbar) return; // กัน error ถ้าไม่มี navbar

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 80) {
        // เลื่อนลง -> ซ่อน
        navbar.style.top = "-80px";
    } else {
        // เลื่อนขึ้น -> แสดง
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


/* =========================================
   3. HAMBURGER MENU
========================================= */
function toggleMenu() {
    const menu = document.getElementById("menu-container");

    if (menu) {
        menu.classList.toggle("show");
    }
}