```javascript
/* =====================================================
   HEVANESS PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= PROJECT DATA ================= */

const projectData = {

    "Cyber City Escape": {
        description:
            "Cyber City Escape is a futuristic 3D endless runner game developed using Unity. The player controls a cyber runner who is escaping from security drones while avoiding obstacles, collecting energy orbs and using power-ups."
    },

    "Canteen Ordering System": {
        description:
            "The Canteen Ordering System is a C++ and MySQL based sales and order management system. It includes customer registration, admin login, menu management, order management, payment and sales statistics."
    },

    "Garden vs Monsters": {
        description:
            "Garden vs Monsters is a browser-based tower defense game developed using HTML, CSS and JavaScript. Players defend their garden by placing towers and stopping waves of monsters from reaching the base."
    },

    "The Last Day at School": {
        description:
            "The Last Day at School is an escape-room game inspired by Rukun Negara. Players solve puzzles and complete challenges based on Malaysian values while progressing through a school-based story."
    }

};


/* ================= PROJECT MODAL ================= */

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");


function showProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }

    modalTitle.textContent = projectName;

    modalDescription.textContent = project.description;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}


/* Close modal by clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeProject();

    }

});


/* Close modal with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-container, .contact-container"
);

animatedElements.forEach(element => {

    element.classList.add("hidden");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-animation");

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thanks " +
        name +
        "! Your message has been received. " +
        "You can connect the form to an email service later."
    );

    contactForm.reset();

});


/* ================= RESUME ================= */

function downloadResume(event) {

    event.preventDefault();

    alert(
        "Add your resume PDF as 'resume.pdf' inside your portfolio folder, then change the resume button link to resume.pdf."
    );

}


/* ================= TYPING EFFECT ================= */

const heroTitle = document.querySelector(".hero h2");

const originalText = heroTitle.textContent;

heroTitle.textContent = "";

let textIndex = 0;

function typeText() {

    if (textIndex < originalText.length) {

        heroTitle.textContent += originalText.charAt(textIndex);

        textIndex++;

        setTimeout(typeText, 60);

    }

}

setTimeout(typeText, 700);
```
