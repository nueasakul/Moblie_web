// ฟังก์ชันกดปุ่ม Read More เพื่อเปิดรายละเอียด
function openCard(btn) {
    let card = btn.closest('.project-card');
    
    // ซ่อนปุ่ม Read More
    card.querySelector('.read-more-btn').style.display = 'none';
    
    // แสดงปุ่ม X และ กล่องเนื้อหา
    card.querySelector('.close-btn').style.display = 'block';
    card.querySelector('.card-details').style.display = 'block';
    
    // (ทางเลือก) ปลดล็อคความสูงของข้อความให้แสดงเต็มๆ
    card.querySelector('.card-desc').style.WebkitLineClamp = 'unset';
}

// ฟังก์ชันกดปุ่ม X เพื่อพับเก็บ
function closeCard(btn) {
    let card = btn.closest('.project-card');
    
    // แสดงปุ่ม Read More กลับมา
    card.querySelector('.read-more-btn').style.display = 'block';
    
    // ซ่อนปุ่ม X และ กล่องเนื้อหา
    card.querySelector('.close-btn').style.display = 'none';
    card.querySelector('.card-details').style.display = 'none';
    
    // บังคับตัดคำ 3 บรรทัดเหมือนเดิม
    card.querySelector('.card-desc').style.WebkitLineClamp = '3';
    
    // รีเซ็ตให้กลับไปหน้าแรกเสมอ (หลักการทำงาน)
    let leftTab = card.querySelector('.left-tab');
    switchTab(leftTab, 'tab-1');
}

// ฟังก์ชันสลับแท็บซ้าย-ขวา
function switchTab(clickedTab, targetTabClass) {
    let card = clickedTab.closest('.project-card');
    
    // 1. ซ่อนเนื้อหาแท็บทั้งหมดในการ์ดนี้
    let allContents = card.querySelectorAll('.tab-content');
    allContents.forEach(content => content.style.display = 'none');
    
    // 2. ลบสีปุ่มที่ถูกเลือก (active) ออกทั้งหมด
    let allTabs = card.querySelectorAll('.side-tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // 3. แสดงเนื้อหาที่เลือก และ ใส่สีให้ปุ่มที่กด
    card.querySelector('.' + targetTabClass).style.display = 'block';
    clickedTab.classList.add('active');
}