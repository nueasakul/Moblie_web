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
function toggleAccordion(button) {
    // สลับคลาส 'active' ที่ปุ่มเพื่อหมุนลูกศร
    button.classList.toggle("active");

    // หา div ที่เป็น panel เนื้อหาซึ่งอยู่ติดกับปุ่ม
    var panel = button.nextElementSibling;

    // เช็คว่าเปิดอยู่หรือเปล่า ถ้าเปิดให้ปิด ถ้าปิดให้เปิด (สไลด์ลง)
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        // ให้ความสูงกางออกจนสุดเนื้อหา
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}