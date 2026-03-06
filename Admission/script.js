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