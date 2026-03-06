const navbar = document.getElementById("main-nav");
const menu = document.getElementById("menu-container");
let lastScrollTop = 0;

// 1. Smart Navbar Logic
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop = Math.max(0, scrollTop); 

    if (scrollTop > lastScrollTop && scrollTop > 80) {
        navbar.style.top = "-80px"; 
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// 2. Hamburger Menu Toggle
function toggleMenu() {
    menu.classList.toggle("show");
}

// 3. Mobile Dropdown Logic (แก้ไขใหม่)
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(e) {
        // เช็คก่อนว่าหน้าจอเล็กไหม
        if (window.innerWidth <= 1080) {

            // ★ จุดสำคัญที่เพิ่มมา: เช็คว่าสิ่งที่กด เป็น "เมนูย่อย" หรือเปล่า?
            // e.target คือจุดที่นิ้วไปโดนจริงๆ
            // .closest('.dropdown-menu') เช็คว่าจุดที่โดน อยู่ในกล่อง dropdown-menu หรือไม่
            if (e.target.closest('.dropdown-menu')) {
                return; // ถ้าใช่ "เมนูย่อย" ให้จบฟังก์ชันตรงนี้เลย (ปล่อยให้ลิงก์ทำงานปกติ)
            }

            // ถ้าโค้ดวิ่งมาถึงตรงนี้ แปลว่ากดที่ "หัวข้อหลัก" แน่นอน
            e.preventDefault(); // ห้ามเปลี่ยนหน้าของหัวข้อหลัก
            
            // สลับ Class เปิด/ปิด
            this.classList.toggle('active-dropdown');
            
            // ปิดตัวอื่นที่เปิดค้างอยู่
            document.querySelectorAll('.dropdown').forEach(other => {
                if (other !== this) other.classList.remove('active-dropdown');
            });
        }
    });
});