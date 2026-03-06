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

// 3. Mobile Dropdown Logic
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 1080) {
            // หยุดการทำงานของ Link เพื่อให้เมนูกางออก
            e.preventDefault(); 
            
            // ปิดตัวอื่นก่อนเปิดตัวที่เลือก
            document.querySelectorAll('.dropdown').forEach(other => {
                if (other !== this) other.classList.remove('active-dropdown');
            });

            this.classList.toggle('active-dropdown');
        }
    });
});