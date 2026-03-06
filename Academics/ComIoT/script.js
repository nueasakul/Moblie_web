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