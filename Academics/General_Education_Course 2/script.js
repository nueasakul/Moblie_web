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


let commentCount = 2;

function addComment(){
    const input = document.getElementById("commentInput");
    const text = input.value.trim();

    if(text === "") return;

    const commentList = document.getElementById("commentList");

    const newComment = document.createElement("div");
    newComment.className = "comment";

    newComment.innerHTML = `
        <div class="avatar"></div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="name">Anonymous 00${commentCount}</span>
                <span class="time">Just now</span>
            </div>
            <p>${text}</p>
        </div>
    `;

    commentList.appendChild(newComment);
    input.value = "";
    commentCount++;
}