const sections = document.querySelectorAll(
    ".hero, .about, .skills, .projects, .education, .contact"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
});

/* Active Navbar Highlight */

const navLinks = document.querySelectorAll(".navbar nav a");

const pageSections = document.querySelectorAll(
    "section[id]"
);

const navObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    '.navbar nav a[href="#' + entry.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        threshold: 0.4
    }
);

pageSections.forEach(function (section) {
    navObserver.observe(section);
});

/* Typing Animation */

const words = [
    "IT Student",
    "Python Learner",
    "Web Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

if (typingText) {
    typeEffect();
}

/* Back to Top Button */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* Mobile Navbar Menu */

const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
});