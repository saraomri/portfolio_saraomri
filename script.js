/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    // Charger le mode depuis le localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    });
}

/* ================= NAVBAR SCROLL EFFECT ================= */
const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
    if (navbar) {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

/* ================= SMOOTH SCROLL LINKS ================= */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ================= SIMPLE SCROLL ANIMATION ================= */
const revealElements = document.querySelectorAll(
    ".skill-card, .experience-item, .education-item, .contact-info"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
