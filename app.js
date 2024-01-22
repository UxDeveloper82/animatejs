document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("img");

    images.forEach(function(img) {
        img.addEventListener("mouseover", function() {
            this.style.transition = "width 1s, opacity 1s";
            this.style.width = "175px";
            this.style.opacity = 1;
        });

        img.addEventListener("mouseout", function() {
            this.style.transition = "width 1s, opacity 1s";
            this.style.width = "100px";
            this.style.opacity = 0.3;
        });
    });
});