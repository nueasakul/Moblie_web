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
// --- 1. ส่วนควบคุมการเปิด-ปิด Widget (เพิ่มใหม่) ---
function toggleChatbot() {
    const chatCard = document.getElementById('chatbot-card');
    const launcherBtn = document.getElementById('chat-launcher-btn');

    // เช็คว่ามีคลาส 'show' อยู่ไหม
    if (chatCard.classList.contains('show')) {
        // ถ้าเปิดอยู่ -> ให้ปิด
        chatCard.classList.remove('show');
        // รออนิเมชั่นจบแล้วค่อยซ่อน (Optional: ถ้าจะทำให้เนียนมากๆ)
        setTimeout(() => { chatCard.style.display = 'none'; }, 300);
        launcherBtn.style.display = 'flex'; // โชว์ปุ่มเปิดกลับมา
    } else {
        // ถ้าปิดอยู่ -> ให้เปิด
        chatCard.style.display = 'block';
        // delay นิดนึงเพื่อให้ transition ทำงาน
        setTimeout(() => { chatCard.classList.add('show'); }, 10);
        launcherBtn.style.display = 'none'; // ซ่อนปุ่มเปิด (หรือจะเก็บไว้ก็ได้)
    }
}

// --- 2. ส่วนการทำงานเดิม (Menu / Chat / Back) ---
const faqData = [
    { q: "วิศวกรรมระบบไอโอทีและสารสนเทศเรียนอะไรบ้าง ?", a: "<ul><li>เราเน้นการผสมผสานทั้ง ฮาร์ดแวร์ (เซ็นเซอร์, อุปกรณ์) ซอฟต์แวร์ และระบบเครือข่ายเข้าด้วยกัน เพื่อสร้าง ระบบอัจฉริยะ ที่เชื่อมต่อกันได้จริง (Smart Devices)</li></ul>" },
    { q: "จุดเด่นของหลักสูตรคือออะไร ?", a: "<ul><li>ทันต่อยุคสมัย: รองรับเทรนด์โลกอย่าง AI, Edge Computing, 5G, Smart City และ Industry 5.0</li><li>ครบเครื่อง (Full Stack):รู้ทั้ง Hardware และ Software สามารถทำงานได้หลากหลาย ตั้งแต่สร้างอุปกรณ์เซนเซอร์ไปจนถึงเขียนแอปพลิเคชันและทำระบบ Cloud</li><li>เน้นปฏิบัติจริง: มีรายวิชาปฏิบัติการ (Lab) และโปรเจกต์ต่อเนื่องทุกปี เพื่อให้เกิดทักษะที่ใช้งานได้จริง (Hands-on Experience)</li><li>โอกาสงานกว้างขวาง: สามารถเป็นได้ทั้ง IoT Engineer, Embedded System Engineer, Software Developer, Data Engineer, Network Engineer หรือแม้แต่ Startup เจ้าของนวัตกรรม</li></ul>" },
    { q: "สาขานี้ต่างจากวิศวกรรมคอมพิวเตอร์ หรือไอทีทั่วไปอย่างไร ?", a: "<ul><li>เราเน้นการผสมผสานทั้ง ฮาร์ดแวร์ (เซ็นเซอร์, อุปกรณ์) ซอฟต์แวร์ และระบบเครือข่ายเข้าด้วยกัน เพื่อสร้าง ระบบอัจฉริยะ ที่เชื่อมต่อกันได้จริง (Smart Devices)</li></ul>" },
    { q: "ไม่มีพื้นฐานเขียนโปรแกรม หรือไม่เคยต่อวงจรเลย สามารถเรียนได้ไหม ?", a: "<ul><li>เรียนได้แน่นอน! หลักสูตรของเรามีการปูพื้นฐานให้ใหม่ตั้งแต่เริ่มต้น ทั้งด้านตรรกศาสตร์ การเขียนโปรแกรมเบื้องต้น และระบบเครือข่าย โดยมีอาจารย์คอยดูแลอย่างใกล้ชิด</li></ul>" },
    { q: "เข้ามาเรียนแล้ว จะรู้ได้ยังไงว่าควรเลือกลงวิชาไหนให้ตรงกับสายงานที่อยากทำ ?", a: "<ul><li>ทางสาขามีระบบแนะนำแผนการเรียน (Skill Roadmap) ที่ช่วยไกด์เส้นทางให้ชัดเจนว่า หากน้องๆ อยากจบไปเป็นผู้เชี่ยวชาญด้าน Hardware, Software, Network หรือ Data จะต้องเลือกลงเรียนวิชาไหนบ้าง</li></ul>" },
];

const menuView = document.getElementById('menu-view');
const chatView = document.getElementById('chat-view');
const chatQuestion = document.getElementById('chat-question');
const chatAnswer = document.getElementById('chat-answer');
const footerMenuBtn = document.getElementById('footer-menu-btn');
const footerBackBtn = document.getElementById('footer-back-btn');

function initMenu() {
    menuView.innerHTML = "";
    faqData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'faq-btn';
        btn.innerText = item.q;
        btn.onclick = () => openChat(index);
        menuView.appendChild(btn);
    });
}

function openChat(index) {
    chatQuestion.innerText = faqData[index].q;
    chatAnswer.innerHTML = faqData[index].a;
    menuView.style.display = 'none';
    chatView.style.display = 'block';
    footerMenuBtn.style.display = 'none';
    footerBackBtn.style.display = 'flex';
}

function goBack() {
    chatView.style.display = 'none';
    menuView.style.display = 'block';
    footerBackBtn.style.display = 'none';
    footerMenuBtn.style.display = 'block';
}

// รันครั้งแรก
initMenu();