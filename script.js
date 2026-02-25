// ==========================================
// 1. Smart Navbar (ซ่อนตอนเลื่อนลง แสดงตอนเลื่อนขึ้น)
// ==========================================
let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

// ==========================================
// 2. Hamburger Menu (สำหรับมือถือ)
// ==========================================
function toggleMenu() {
    const menu = document.getElementById("menu-container");
    menu.classList.toggle("show");
}

// ==========================================
// 3. Multi-Slider Logic (คุมสไลด์ทุกตัวในหน้าเว็บ)
// ==========================================
const allSliders = document.querySelectorAll('.slider-container');

allSliders.forEach((slider) => {
    const wrapper = slider.querySelector('.slider-wrapper');
    // ค้นหาสไลด์ทั้งหมด ไม่ว่าจะเป็นแบบธรรมดา หรือแบบ full-image
    const slides = wrapper.querySelectorAll('.slide-item, .slide-item-full');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlide;

    // ฟังก์ชันสั่งเลื่อน
    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // ฟังก์ชันเช็คหน้า ถัดไป/ย้อนกลับ
    function moveSlide(direction) {
        currentIndex += direction;

        // วนลูป
        if (currentIndex >= totalSlides) {
            currentIndex = 0; 
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1; 
        }
        
        updateSlider();
        resetTimer();
    }

    // ฟังก์ชันนับเวลา 5 วินาที
    function resetTimer() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            moveSlide(1);
        }, 5000);
    }

    // ผูก Event ปุ่มกด (ถ้าใน HTML มีปุ่ม)
    if (prevBtn) {
        // ลบ onclick จาก HTML แล้วมาควบคุมใน JS แทนเพื่อความเสถียร
        prevBtn.addEventListener('click', () => moveSlide(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => moveSlide(1));
    }

    // เริ่มทำงานอัตโนมัติ
    autoSlide = setInterval(() => {
        moveSlide(1);
    }, 5000);
});