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


// เลือกปุ่มทั้งหมดที่มี class .project-item
const acc = document.getElementsByClassName("project-item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // 1. สลับ class 'active' เพื่อหมุนลูกศร
        this.classList.toggle("active");

        // 2. ดึงตัวเนื้อหาที่อยู่ถัดจากปุ่มนี้
        var panel = this.nextElementSibling;

        // 3. เช็คว่าเปิดหรือปิดอยู่
        if (panel.style.maxHeight) {
            // ถ้าเปิดอยู่ -> ปิด (ความสูงเป็น null)
            panel.style.maxHeight = null;
        } else {
            // ถ้าปิดอยู่ -> เปิด (ความสูงเท่ากับเนื้อหาจริง)
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}