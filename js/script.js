//PROJECTS ARRAY
const projects = [
    {
        title: "Study Assistant App",
        description: "A clean JavaFX and Maven desktop application built to streamline flashcard learning, featuring interactive lo-fi UI elements and efficient study workflows.",
        visitLink: "https://github.com/DarkShadsi/studybuddy.git",
        mainImage: "assets/images/projects/SAA-1.png",
        thumb1: "assets/images/projects/SAA-2.png",
        thumb2: "assets/images/projects/SAA-3.png"
    },
    {
        title: "Project Title",
        description: "Project Title goes here...",
        visitLink: "https://github.com/DarkShadsi/studybuddy.git",
        mainImage: "assets/images/projects/project1-image1.png",
        thumb1: "assets/images/projects/project1-image2.png",
        thumb2: "assets/images/projects/project1-image3.png"
    }
];

let currentIndex = 0;
let isAnimating = false;

const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-desc");
const projectLink = document.getElementById("project-link");
const mainImg = document.getElementById("main-img");
const thumb1 = document.getElementById("thumb-1");
const thumb2 = document.getElementById("thumb-2");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateProject(index, direction) {
    const card = document.getElementById("project-card");

    if (direction === "none") {
        card.classList.remove("deck-slide-next", "deck-slide-prev", "deck-reveal");
        void card.offsetWidth;
        injectProjectData(index);
        card.classList.add("deck-reveal");
        return;
    }

    if (isAnimating) return;
    isAnimating = true;

    card.classList.remove("deck-slide-next", "deck-slide-prev", "deck-reveal");
    void card.offsetWidth;

    const exitClass = direction === "next" ? "deck-slide-next" : "deck-slide-prev";
    card.classList.add(exitClass);

    card.addEventListener("animationend", function onExitEnd(e) {
        if (e.target !== card) return;
        card.removeEventListener("animationend", onExitEnd);

        injectProjectData(index);

        card.classList.remove(exitClass);
        void card.offsetWidth;
        card.classList.add("deck-reveal");

        card.addEventListener("animationend", function onRevealEnd(e2) {
            if (e2.target !== card) return;
            card.removeEventListener("animationend", onRevealEnd);
            isAnimating = false;
        });
    });
}

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isAnimating) return;

    currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    updateProject(currentIndex, "prev");
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isAnimating) return;

    currentIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    updateProject(currentIndex, "next");
});

document.addEventListener("DOMContentLoaded", () => {
    updateProject(currentIndex, "none");
});

function injectProjectData(index) {
    const project = projects[index];
    projectTitle.textContent = project.title;
    projectDesc.textContent = project.description;
    projectLink.href = project.visitLink;
    mainImg.src = project.mainImage;
    thumb1.src = project.thumb1;
    thumb2.src = project.thumb2;
}