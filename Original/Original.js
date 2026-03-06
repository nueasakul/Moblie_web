// Logic สำหรับการ Scroll (Smart Navbar)
let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");
window.addEventListener("scroll", function() {
    // ใช้ Math.max เพื่อป้องกันค่าติดลบจาก Elastic Scrolling ใน iOS
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop = Math.max(0, scrollTop); 

    // เพิ่มเงื่อนไข: ถ้าเลื่อนลงเกินความสูง Navbar ถึงจะเริ่มซ่อน
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        // เลื่อนลง -> ซ่อน
        navbar.style.top = "-80px"; 
    } else {
        // เลื่อนขึ้น หรือ อยู่บนสุด -> แสดง
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