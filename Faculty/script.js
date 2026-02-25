// 1. Logic สำหรับการ Scroll (Smart Navbar)
let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");
const nanav_linksvbar = document.getElementById("menu-container");

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
// =========================================
//  MODAL POPUP LOGIC
// =========================================

// 1. ตัวแปร
const modal = document.getElementById("profile-modal");
const closeBtn = document.querySelector(".close-btn");
const cards = document.querySelectorAll(".profile-card");

// Elements ใน Modal ที่จะเปลี่ยนข้อมูล
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalDesc = document.getElementById("modal-desc");

// 2. ฟังก์ชันเปิด Modal และใส่ข้อมูล
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // ดึงข้อมูลจาก Data Attribute ของการ์ดที่กด (เดี๋ยวเราไปเติมใน HTML)
        const imgSrc = card.querySelector("img").src;
        const name = card.querySelector(".thai-name").innerText;
        const role = card.querySelector(".card-role").innerText;
        
        // **สำคัญ** ข้อมูลประวัติ เราจะดึงจาก attribute data-history
        const history = card.getAttribute("data-history") || "ยังไม่มีข้อมูลประวัติเพิ่มเติม";

        // ใส่ข้อมูลลงใน Modal
        modalImg.src = imgSrc;
        modalName.innerText = name;
        modalRole.innerText = role;
        modalDesc.innerHTML = history; // ใช้ innerHTML เผื่อมี <br> ขึ้นบรรทัดใหม่

        // แสดง Modal
        modal.style.display = "flex";
        setTimeout(() => { modal.style.opacity = "1"; }, 10); // Fade in
    });
});

// 3. ฟังก์ชันปิด Modal
function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.display = "none"; }, 300); // รอ Fade out จบ
}

closeBtn.addEventListener("click", closeModal);

// ปิดเมื่อกดพื้นที่ว่างข้างนอก
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        closeModal();
    }
});