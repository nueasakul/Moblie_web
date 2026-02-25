// Fade in animation
const card = document.querySelector(".name-card");
const image = document.querySelector(".profile-image");

window.addEventListener("load", () => {
    card.style.opacity = "0";
    image.style.opacity = "0";

    setTimeout(()=>{
        image.style.transition = "opacity 1s ease";
        image.style.opacity = "1";
    },200);

    setTimeout(()=>{
        card.style.transition = "opacity 1s ease";
        card.style.opacity = "1";
    },600);
});
