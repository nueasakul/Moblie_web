// ================= SMART NAVBAR =================

let lastScrollTop = 0;
const navbar = document.getElementById("main-nav");

window.addEventListener("scroll", function(){

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        // เลื่อนลง → ซ่อน navbar
        navbar.style.top = "-80px";
    } 
    else{
        // เลื่อนขึ้น → แสดง navbar
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;

});


// ================= HAMBURGER MENU =================

function toggleMenu(){

    const menu = document.getElementById("menu-container");

    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    }
    else{
        menu.classList.add("show");
    }

}


// ================= ACCORDION =================

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const currentCard = this.closest(".card");
        const currentContent = currentCard.querySelector(".toggle-content");


        // ปิด card อื่นก่อน
        document.querySelectorAll(".card").forEach(card => {

            if(card !== currentCard){

                card.classList.remove("active");

                const content = card.querySelector(".toggle-content");

                content.style.maxHeight = null;

            }

        });


        // toggle card ที่กด
        if(currentCard.classList.contains("active")){

            currentCard.classList.remove("active");
            currentContent.style.maxHeight = null;

        }
        else{

            currentCard.classList.add("active");
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";

        }

    });

});