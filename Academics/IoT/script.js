const buttons = document.querySelectorAll(".arrow-circle");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const currentCard = this.closest(".card");
        const currentContent = currentCard.querySelector(".toggle-content");

        // ปิดการ์ดอื่นก่อน
        document.querySelectorAll(".card").forEach(card => {
            if (card !== currentCard) {
                card.classList.remove("active");
                const content = card.querySelector(".toggle-content");
                content.style.maxHeight = null;
            }
        });

        // toggle อันที่กด
        if (currentCard.classList.contains("active")) {
            currentCard.classList.remove("active");
            currentContent.style.maxHeight = null;
        } else {
            currentCard.classList.add("active");
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        }

    });
});