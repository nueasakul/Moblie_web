// ฟังก์ชันเปิดร่างขยาย
function openExpanded(btn) {
    // หากล่องโปรเจกต์ตัวที่โดนกด
    let container = btn.closest('.project-interactive-container');
    container.querySelector('.compact-view').style.display = 'none';
    container.querySelector('.expanded-view').style.display = 'block';
}

// ฟังก์ชันปิดกลับไปเป็นร่างเล็ก
function closeExpanded(btn) {
    let container = btn.closest('.project-interactive-container');
    container.querySelector('.expanded-view').style.display = 'none';
    container.querySelector('.compact-view').style.display = 'block';
    
    // รีเซ็ตให้กลับมาหน้า "หลักการทำงาน" เสมอเมื่อปิดแล้วเปิดใหม่ (สำหรับกล่องนี้)
    let defaultTabBtn = container.querySelector('.left-tab');
    switchTab(defaultTabBtn, 1);
}

// ฟังก์ชันสลับแท็บเนื้อหา
function switchTab(btn, tabIndex) {
    // หาพื้นที่เนื้อหาเฉพาะในกล่องนี้เท่านั้น
    let contentArea = btn.closest('.expanded-content-area');
    
    // 1. ซ่อนเนื้อหาทั้งหมดในกล่องนี้
    let allTabs = contentArea.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.style.display = 'none');
    
    // 2. แสดงเฉพาะเนื้อหาที่ตรงกับแท็บที่กด
    contentArea.querySelector('.tab-' + tabIndex).style.display = 'block';

    // 3. เอาสถานะ active ออกจากปุ่มด้านข้างทั้งหมดในกล่องนี้
    let allBtns = contentArea.querySelectorAll('.side-tab-btn');
    allBtns.forEach(b => b.classList.remove('active'));

    // 4. ใส่สถานะ active ให้ปุ่มที่เพิ่งกด
    btn.classList.add('active');
}