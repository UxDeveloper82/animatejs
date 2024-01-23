document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transition = "width 1s, opacity 1s";
            img.style.width = "175px";
            img.style.opacity = 1;
        });

        img.addEventListener("mouseout", () => {
            img.style.transition = "width 1s, opacity 1s";
            img.style.width = "100px";
            img.style.opacity = 0.3;
        });
    });
});