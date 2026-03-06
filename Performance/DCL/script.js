/* =========================================
   1. FADE-IN CARD ANIMATION (On Load)
========================================= */
window.addEventListener("load", function () {

    const card = document.querySelector(".card");

    // เช็คก่อนว่ามี .card จริงไหม (กัน error)
    if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200);
    }

});