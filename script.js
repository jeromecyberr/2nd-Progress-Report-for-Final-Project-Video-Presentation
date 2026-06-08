// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// CLOSE MENU AFTER CLICKING
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ==========================
// HERO SECTION FADE-IN
// ==========================

window.addEventListener("load", () => {

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateX(-50px)";

    heroRight.style.opacity = "0";
    heroRight.style.transform = "translateX(50px)";

    setTimeout(() => {

        heroLeft.style.transition = "all 1s ease";
        heroLeft.style.opacity = "1";
        heroLeft.style.transform = "translateX(0)";

        heroRight.style.transition = "all 1s ease";
        heroRight.style.opacity = "1";
        heroRight.style.transform = "translateX(0)";

    }, 200);

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .about-card, .contact-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// SMOOTH SCROLL FOR LINKS
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(`
=================================
Jerome Campo Portfolio Website
=================================

GitHub:
https://github.com/jeromecyberr

Skills:
- Video Graphic Design
- Racing / Endurance Racing
- Video Editing

=================================
`);