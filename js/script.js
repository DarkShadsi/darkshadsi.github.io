//PROJECTS ARRAY
const projects = [
    {
        title: "Study Assistant App",
        description: "Study Assistant App is a JavaFX desktop application" +
            " for creating and managing flashcard decks, studying with type-in quizzes, " +
            "and tracking session progress - all backed by a MySQL database.",
        visitLink: "https://github.com/DarkShadsi/studybuddy.git",
        mainImage: "assets/images/projects/SAA-1.png",
        thumb1: "assets/images/projects/SAA-2.png",
        thumb2: "assets/images/projects/SAA-3.png"
    },
    {
        title: "Hack Quest",
        description: "A Java-based educational game that tests programming " +
            "knowledge through interactive quizzes.",
        visitLink: "https://github.com/DarkShadsi/Hack-Quest-version-2.git",
        mainImage: "assets/images/projects/HQ-1.png",
        thumb1: "assets/images/projects/HQ-2.png",
        thumb2: "assets/images/projects/HQ-3.png"
    },
    {
        title: "Maze of Missteps",
        description: "In every turn lies another mistake. A java maze-game " +
            "where your primary goal is to collect keys and escape the " +
            "maze before the monsters get you.",
        visitLink: "https://github.com/DarkShadsi/Maze-of-Missteps.git",
        mainImage: "assets/images/projects/MoM-1.png",
        thumb1: "assets/images/projects/MoM-2.png",
        thumb2: "assets/images/projects/MoM-3.png"
    },
    {
        title: "Snake Game",
        description: "A simple Java Snake game testing out my skills " +
            "on OOP and Java threads and Paint components.",
        visitLink: "https://github.com/DarkShadsi/Snake-Game.git",
        mainImage: "assets/images/projects/SnakeGame-1.png",
        thumb1: "assets/images/projects/SnakeGame-2.png",
        thumb2: "assets/images/projects/SnakeGame-3.png"
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