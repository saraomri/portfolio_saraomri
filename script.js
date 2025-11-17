// Animation d’apparition lors du scroll
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
});
